---
layout: post
title: Python Logging Woes
date: 2020-02-17 12:30:00 -0600
categories: python logging library problems
---

The `logging` library in Python is a frustration to use for all but the simplest
purposes. Many of its behaviors are inconvenient, counterintuitive, or even in the
best case,


<!--
### Summary

two examples
1. logging.StreamHandler is a thing, but logging.handlers.StreamHandler is not. logging.handlers.TimedRotatingFileHandler is a thing, but logging.TimedRotatingFileHandler is not
also the module uses camelcase cause fuck consistency

2. if you have a logger with a bunch of Handlers attached at the Info level, and logger.getLevel() == WARNING, the Handlers will never emit the info messages
the Handlers and Logger have distinct logging levels, and the Logger's logging level has to be less than or equal to all of its handlers or the handlers will be muted

3. loggers operating on the same type of thing (a single file of the same name) are mutually exclusive, and cannot be
   composed in any way. Or, simply, a logger cannot have both a Stream handler and File handler.

### Logger construction considered harmful

```python
def bad_logger(logger_name, log_level, log_file, log_file_level, log_format=LOG_FORMAT):
    """ Takes in the name of a Logger, captures it using logging.getLogger(logger_name),
        attaches new Handlers to it and returns it """
    formatter = logging.Formatter(log_format)

    file_handler = logging.FileHandler(log_file)
    file_handler.setLevel(log_file_level)
    file_handler.setFormatter(formatter)

    stream_handler = logging.StreamHandler(stream=sys.stderr)
    stream_handler.setLevel(log_level)
    stream_handler.setFormatter(formatter)

    logger = logging.getLogger(logger_name)
    logger.addHandler(file_handler)
    logger.addHandler(stream_handler)
    logger.setLevel(logging.ERROR)
    return logger
```


```python
def good_logger(logger, log_level, log_file, log_file_level, log_format=LOG_FORMAT):
    """ Takes in a previously captured or constructed Logger and adds new Handlers to it """
    formatter = logging.Formatter(log_format)

    file_handler = logging.FileHandler(log_file)
    file_handler.setLevel(log_file_level)
    file_handler.setFormatter(formatter)

    stream_handler = logging.StreamHandler(stream=sys.stderr)
    stream_handler.setLevel(log_level)
    stream_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    logger.addHandler(stream_handler)
    logger.setLevel(logging.ERROR)
    return logger
```

### Log Level considered harmful
```python
def good_logger(logger, log_level, log_file, log_file_level, log_format=LOG_FORMAT):
    """ Takes in a previously captured or constructed Logger and adds new Handlers to it """
    formatter = logging.Formatter(log_format)

    file_handler = logging.FileHandler(log_file)
    file_handler.setLevel(log_file_level)
    file_handler.setFormatter(formatter)

    stream_handler = logging.StreamHandler(stream=sys.stderr)
    stream_handler.setLevel(log_level)
    stream_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    logger.addHandler(stream_handler)
    return logger
```

Theoretically, the above statement should be sufficient to log to the file with a specified log level, and to the stream with a specified log level.

What will actually happen is that no logging will occur below the Warning level.


```
In [8]: import logging

In [9]: a = logging.getLogger(__name__)

In [10]: b = logging.getLogger()

In [11]: a is b
Out[11]: False

In [12]: a
Out[12]: <Logger __main__ (WARNING)>

In [13]: b
Out[13]: <RootLogger root (WARNING)>
```

Additionally, if you happen to be blessed with the knowledge that `NOTSET` is the lowest level of logging i.e.
"enable all logging," it actually is equivalent to "disable all logging" if applied to a Logger object,
even though it causes the logger to function as though any logging level may be printed if applied to the handler,
then attached to a logger at `DEBUG` or higher.

In other words, you should just set the logging level of any logger you want to use to `DEBUG` and call it a day.
Use the Handlers for more precise logging levels.

### Handlers are sometimes mutually exclusive
If you attempt to attach a `TimedRotatingFileHandler` and a `RotatingFileHandler` to the same logger,
you might expect to produce a logfile which is rotated both based on its size, and on a set interval.

The actual behavior is that only the last handler attached to the logger does anything.

In my testing, you can only have one kind of StreamHandler and one kind of FileHandler available for use on a single
logger. So if you wanted to rotate a file on some interval, and also ensure it never exceeded a certain size,
there is no solution available for you in Python's base logging library.


### Specific handlers don't do right
The RotatingFileHandler has a parameter for setting the maximum number of times it will rotate (backupCount).
Its default value is zero. The expected behavior may be that this will rotate the file indefinitely, but it actually
disabled rotation. There is no way to get indefinite log rotation based on size.

Instead, you set it arbitrarily high. I tried `2**32` and it actually locked my program up for ~7 minutes. `2**16`
caused a 30 second delay before my program began. I have no idea why. I can only guess that
maybe it's trying to pre-allocate all the files, somehow.

Eventually, you'll just have to reset the process running the logger. It may be better to just use a
BaseRotatingHandler for all purposes.

### Unintuitive behaviors

One gotcha I've experienced a few times is the behavior of

-->

### Little inconsistencies
```
In [1]: from logging import StreamHandler
        # worked

In [2]: from logging import TimedRotatingFileHandler
---------------------------------------------------------------------------
ImportError                               Traceback (most recent call last)
<ipython-input-2-6452dd11faaa> in <module>
----> 1 from logging import TimedRotatingFileHandler

ImportError: cannot import name 'TimedRotatingFileHandler' from 'logging' (/usr/lib/python3.8/logging/__init__.py)

In [3]: from logging.handlers import TimedRotatingFileHandler
        # worked

In [4]: from logging.handlers import StreamHandler
---------------------------------------------------------------------------
ImportError                               Traceback (most recent call last)
<ipython-input-4-e383e8c4de63> in <module>
----> 1 from logging.handlers import StreamHandler

ImportError: cannot import name 'StreamHandler' from 'logging.handlers' (/usr/lib/python3.8/logging/handlers.py)
```
`StreamHandler` can be imported directly from `logging`, but not from `logging.handlers`.

`TimedRotatingFileHandler` can be imported from `logging.handlers`, but not from `logging`.

I suppose it's fair that the StreamHandler, the most common logger for use, would be provided in
the base of the library. But it seems reasonable to also link the StreamHandler into the
`handlers` section of the library for organizational purposes.
