---
layout: post
title: Exploring my vimrc
date: 2020-02-28 12:30:00 -0600
categories: vim vimrc config ide
---

I've been using vim as my primary editor for the better part of two years now.
My .vimrc has gone through a great many changes in that time, but I think I hit
a point early on where many of the features and plugins I had chosen were set
in stone. It won't be a perfect fit for everyone, but you might find some useful
pieces and ideas for your .vimrc.

This is not so much a guide to setting up vim for first time use, as it is a
place to explore options and features you may not already be aware of as a newer
but experienced user.

### What I care about in my vimrc
Above all else, I value the responsiveness of vim over nearly any other feature.
Even in the context of a remote session, I can barely notice the delay in
operations which is caused by the network. This is something vim accomplishes
without help from the user doing any configuration, but it can be difficult to
maintain if you are intent on adding many different plugins for different
purposes.

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
and useful. And best of all, there's virtually no speed impact! Sure, you could
go to the effort to benchmark the precise time it takes for vim to render with
and without the plugin, and you would probably find a slight difference. But I
haven't personally felt the impact of that lost time. Even better, I have
definitely felt the impact of the benefits that have come from using
vim-airline!
