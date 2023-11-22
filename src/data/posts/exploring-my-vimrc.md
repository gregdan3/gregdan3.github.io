---
title: Exploring my vimrc
author: gregdan3
date: 2020-03-08
description: This isn't my current vimrc. New version when?
published: true
---

I've been using vim as my primary editor for the better part of two years now.
[My .vimrc](https://github.com/gregdan3/dotfiles/blob/master/.vimrc)
has gone through a great many changes in that time, but I think I hit
a point early on where many of the features and plugins I had chosen were set
in stone. It won't be a perfect fit for everyone, but you might find some useful
pieces and ideas for your .vimrc.

This is not so much a guide to setting up vim for first time use, as it is a
place to explore options and features you may not already be aware of as a newer
but experienced user.

### What I care about in my vimrc

I value the responsiveness of vim over nearly any other feature.
Even in the context of a remote session, I can barely notice the delay in
operations which is caused by the network. This is something vim accomplishes
without help from the user doing any configuration, but it can be difficult to
maintain if you are intent on adding many different plugins for different
purposes.

### Basic features of my vimrc

When I first started using vim, I made a rule for myself to enter settings which
I understand, rather than throwing others' config options into it and rolling
with those changes, whatever they may be. This wasn't a perfect system, since
there is always a point where you have to learn through experimentation and just
throw settings into the config to see what suits you. Generally, though, I
made sure to understand any setting I used so I could document it for myself,
who might not know what I was thinking a year ago or more.

In my vimrc, I try to group settings together by their family of functionality.
Settings that change visual aspects of vim, but not the buffer, are grouped.
Settings that exclusively affect the buffer are grouped.

#### Visual Settings

Visual settings I have enabled include setting the display to include the
lastline, which is not clear just from reading `set display+=lastline`. Have you
ever opened a file where a large amount of the content is on a single line? In
this context, the default behavior is to obscure lines which leave the visible
buffer with `@`. With `display+=lastline`, vim will no longer obscure this last
line, meaning you'll always be able to see lines that exit the visible buffer.

I also set `scrolloff=3` and `sidescrolloff=5` so that if you attempt to scroll
the cursor outside the visible buffer, there will always be no less than three
visible lines above or below the cursor and five visible lines to either side of
the cursor. This forces the cursor to always be more central to the visual
buffer, which is nice for relaxing your eyes into a single position.

#### Functional settings

Most importantly, I `set undofile` and create a place to store undo history in
`~/.vim/undodir`. I actually ensured this file exists (by creating it if it does
not exist) at the top of my vimrc, so that this is less likely to fail. The
importance of an undo file is to store file changes across sessions, so that if
I open the same file again later, I can still undo/redo any and all remembered
changes. The most common use case is that I close a file for a moment, such as by
accident, and then re-open it. Normally, my write history would be lost, which
may be inconvenient at best, and problematic at worst. With this, I don't need
to worry; the change history is preserved.

For convenience, I make it possible to use backspace across indents and ends of
lines with `backspace=indent,eol,start`.

Due to my familiarity with [i3wm](https://i3wm.org/), I changed vim's default
splitting behavior with `set splitbelow` and `set splitright`. This changes
`:split` and `:vsplit`, respectively, to open into the specified direction. This
is essentially just to mock i3's behavior.

#### Formatting settings

Most importantly, I make sure that vim automatically wraps the lines of the
buffer (NOT the display!) at column 80. This is a change I made fairly recently,
but since 80 column terminal widths were standard
[a long time ago](https://softwareengineering.stackexchange.com/questions/148677),
an 80 column width for text buffers actually makes much of my work more
comfortable. For example, this is near perfectly enough text width to make a
terminal taking up the left or right half of my screen (tiled via i3) also have
text which takes up most of its width. Additionally, as noted in the above link,
code which takes up a lot of width on the screen is that much harder to read and
understand.
This is accomplished with `set textwidth=80`, which cares about the width of
lines in the buffer. If you use a tiling window manager, beware of `wrapmargin`,
which cares about the visual width of the terminal! This becomes particularly
frustrating when I collapse a vim window to half its previous width, and lines
now change where they end as I type.
To really make this option come alive, do `set formatoptions+=tc` to
automatically apply this setting as you type. The `t` is the actual automation
of this process; the `c` is for automatically inserting comment characters if
this jump occurs while you're typing a comment in some code buffer.

As I've most often seen done by other developers, I make sure to never use tab
characters, instead always filling in with four spaces.

#### Information settings

Setting the ruler is critical, to make vim's language-like controls come alive.
I use `set number` and `set relativenumber` both, which show the current line
number in the buffer on the cursor's line, and otherwise show the number of
lines above and below the cursor on every other line.

Also important is `set wildmenu`, to enable `:` command autocompletion, and
`set wildmode=longest:full,list` so that you can see all the matches which are
available to you.

#### Keybinds

I rebind `ctrl+H` to `ctrl+W, ctrl+H`, and do the same for the other three
navigational keys, in order to save two keypresses when switching between
buffers open in splits.

#### Autocommands

I stole my augroup for remembering the last position in a previously opened file
from [here](https://vi.stackexchange.com/questions/17007). There's not much to
say about this; it's a convenience option which vim doesn't natively provide the
capability to do, but it is convenient none the less.

I also clean all whitespace out at the end of lines in every buffer. Thus far, I
haven't needed to work in a filetype for which this is a problem, but I'm sure
they exist. Until then, this setting stays.

### My thoughts on Plugins

I've seen a number of vim users out there decry the use of plugins for various
reasons, among them the thought of "You can do that without a plugin!". And for
the most part, that is true; vim-airline, for example, can be replaced very
cleanly with [some effort](https://shapeshed.com/vim-statuslines/) to create
your own status bar.

In my view, the purpose of a plugin should be to help the user to do something
they already want, without that user needing to spend excessive time to think
about and configure vim to do what they want. As such, there is significant
benefit to picking vim-airline over assigning your own statusline from
component functions. It already works out of the box. The defaults are sensible
and useful. And best of all, there's virtually no speed impact. Sure, you could
go to the effort to benchmark the precise time it takes for vim to render with
and without the plugin, and you would probably find a slight difference. But I
haven't personally felt the impact of that lost time. Even better, I have
definitely felt the impact of the benefits that have come from using
vim-airline!

### Brief notes on plugins I do use

The majority of my plugins are either language specific, or too useful to let
go. Chief among these is [ale](https://github.com/dense-analysis/ale), which is
capable of providing asynchronous linting (via other installed programs) to any
code buffer. I also am a big fan of
[YouCompleteMe](https://github.com/ycm-core/YouCompleteMe). These two plugins
require little to no configuration, and provide a huge amount of the features
which many of those using vim as a code editor would otherwise miss. Seriously,
I cannot recommend them enough, and if you don't already use them, give them a
shot.

My remaining plugins, for the most part, are features which extend capabilities
vim already has. For example, [NerdTree](https://github.com/preservim/nerdtree)
makes the file exploration capability vim already had much more convenient to
use, and provides several missing features such as the ability to actually
operate on the whole files, not only edit individual files. There is also
[vim-airline](https://github.com/vim-airline/vim-airline), which adds a fancy,
pre-configured status bar to vim. This isn't strictly necessary, but being able
to throw this plugin into my vimrc for almost no cost is excellent. The plugin
doesn't impact either vim's performance or my personal time to either configure
or poorly reimplement, which is that much more of a win for vim-airline.

### Plugins I don't use but would

#### vimwiki

[vimwiki](https://github.com/vimwiki/vimwiki) looks extremely useful for a
variety of reasons. Having a portable, in-project solution for documentation
would be excellent, and this doubles as a great place to take personal and/or
temporary notes for any particular purpose. The use of a mark-up syntax means it
is perfectly reasonable to write strictly Github syntax markdown, for example,
and easily compile that to a pdf or other accessible format on just about any
system.

The only reason I don't use the plugin is that I don't have an immediate
personal need for it, though I may make one up just to try it pretty soon.

### My TODO list for vim

#### Sessions

One of the cooler features I've seen offered by vim is the ability to create
sessions, where all the objects in the environment (plugins, variables, open
files, and more) are saved into a .session file which can be opened to restore
the user to the state their vim session was in previously.

I first heard about sessions when a friend sent me [this
article](https://bocoup.com/blog/sessions-the-vim-feature-you-probably-arent-using),
and Adam Sontag here goes over the most important capabilities of sessions,
which aren't much more than I've already described.

My problem with sessions is about as surface-level as it gets, though: I forget
to use them. Routinely. I'll have my environment set up for development on a
rust or python project, work for a few hours, and then `:wq` without first
saving the session information with :mks.

What I'd change is to have automatically saved and restored sessions for files I
open. For example, if I were to open `pyproject/foo.py`, and there is a session
file in the same directory as foo.py which was applied to foo.py, that session
should be automatically restored. Seems simple enough, right? I haven't gotten
around to making this change, however, and I haven't seen a plugin that can do
this for me. It is worth noting that Adam Sontag referenced
[vim-session](https://github.com/xolox/vim-session), which probably could get
the job done with some tweaking.

#### Folding

I haven't found myself needing to use folding just yet, in any particular code
base I've worked in. Generally, if there is a function I'm not currently working
on or using, it simply isn't on the screen. If I need to see another function, I
don't want to deal with opening the fold, I want to jump to the definition and
see what working with immediately. When I used folds for a short while, these
were the weaknesses I noticed which made me turn them off again. However, it may
be reasonable to start using them again if the folds could automatically open
and close under specific conditions. For example, if I were to jump to the
definition of a function which is currently folded, it should open. Then, when I
move away from that function, it should re-fold. As yet, I am not aware of any
functionality to do this.

#### Tags

Tags, as I understand them, are a way to mark parts of a file as places which
can be jumped to and from on the fly. Since this sounds like a helpful, speedy
way to navigate complex buffers, especially those of code bases which I am
currently learning, I might like to learn how to use vim's tagging functions.

### That's vim!

Here's hoping you found a useful setting or plugin to try out, in reading this.
If you know of any interesting and/or useful vim plugins or settings, send them
my way and I'll give them a shot, and maybe add them to my list.
