---
title: I
author: gregdan3
date: 2024-06-06
description: I made my other site readable on the Nintendo DS Browser.
published: false
---

## Summary

- Web frameworks, css libraries, and all of their relations are fluff. Just make something. If you use a framework or library, have a reason.
- If you want your site to load on every obscure browser that _might_ still be used, target browsers from 2010. If you don't, it's still fun to try.
- If you want a challenge, try to make your site readable on the [Nintendo DS Browser](https://en.wikipedia.org/wiki/Nintendo_DS_Browser). Or [Ladybird](https://github.com/LadybirdWebBrowser/ladybird)!
- [Click here to skip past the sappy bit](#the-old-web)

## Why?

Near the end of May, I found myself digging through utterly ancient [LiveJournal blogs](https://maplestory.livejournal.com/) and [dreamcast bulletin boards](http://bb.dreampipe.net/).
While I do love Maplestory, I didn't grow up with either LiveJournal or the Dreamcast.
I already had a personal interest in Maplestory from my childhood, and a mild interest in the Dreamcast thanks to [an acquaintance](https://devurandom.xyz/dc/),
but neither of these specific pieces of nostalgia "belong" to me. While I was on the internet as early as I can remember, in 2002 or so, I remember most of my internet exploration from 2008 on- marked by a whole lot of flash games, forums, the Wii, DS, and Minecraft. And Maplestory.

Still, these two pieces of history fascinate me- these are communities that people cared deeply about at one point. The LiveJournal blog I mentioned has somebody cosplaying their own character in Maplestory- that's badass. The dreamcast bulletin board still has gets posts from time to time, Even [Phantasy Star Online](TODO), the original one, has weekends with dozens of players online.

But both of these communities have gone quiet.

And many, many others have too.

Some communities, like for Maplestory or even [World of Warcraft](TODO), are outright replaced with unrecognizably different ones- and it's nobody's fault in particular

Communities like these are hard to keep together. Time moves on, but these communities don't always move with it. People start college, get jobs, have children, have social obligations that don't involve these communities they once were a part of. These communities die because everyone who had the time to be a part of them stopped having the time.

But sometimes, communities die because the technology that made the community is forfeit. Time moves on, and the community wants to move with it, but the foundation of the community is cracked and sinking. Nobody bothers to support and update these old technologies- and, in fairness, sometimes that isn't possible.

Those who return to these communities and technologies are often the most dedicated, willing to put up with every novel inconvenience to re-create the experiences that made those communities special to them.

But you can't recreate the experience. You can look at the memories left behind, or feel the impression that experience left on the people it mattered to. If you're lucky, you can even experience those old technologies in a way not unlike walking through a museum.

But those technologies existed in a certain context, in a certain time, with certain people. Nothing will bring them back.

But I'd like to keep a piece of what those communities accomplished close to my heart. And I want to have the satisfaction that, if anyone did dust off an old piece of technology, they could load [my site](http://mun.la/) like nothing ever changed.

It's not a gesture that means much. Among those putting a Dreamcast, DS, or PSP on the internet in 2024, I expect exactly zero of them to even know my site exists. But I know that, if you tried, it would work. And that's enough.

## The Old Web

Before web standardization took off in [about 2010](TODO), web browsers were in a constant state of scrambling to render nonsense HTML and CSS in a way somehow resembling the author's intent. Because these browsers were in a competition to be the "best" or "most accurate", none of them could stop or slow down- if you made a browser, but it didn't have a feature because it "follows the spec," your browser was bad. Case closed.

This was the reality of the [Browser Wars](TODO). If everyone had agreed to follow the spec and not introduce new features, the web would have been much more consistent and stable- even across different devices and browsers. But each organization making a browser wanted to be "the best." And you couldn't be "the best" without _every_ feature, and then new features on top of that to keep users excited.

And users absolutely were excited. In the early 2000s, buttons like these were commonplace

You could expect unrecognized tags, omitted, CSS rules that have never been seen before or since, and the nastiest javascript imaginable.

After all, there's a reason Python's best HTML parsing library is called ["beautiful soup"](TODO).

### Opera 35

### Opera 15

### Internet Explorer 11

### The Nintendo 3DS Browser

### The Nintendo DSi Browser

### The Nintendo DS Browser

## Lessons Learned

- [Do websites need to look exactly the same in every browser?](https://web.archive.org/web/20230321113908/http://dowebsitesneedtolookexactlythesameineverybrowser.com/)

## Bugs I discovered

### Opera 15's `currentColor`

When using `text-shadow` and other colorable CSS rules, the `currentColor` variable should refer to the color of the text last set with `color`. In Opera 15, `currentColor` doesn't interact correctly with the `:visited` property of `a` tags; it will fetch the color of the default `a` tag, as though it were not visited.

### Nintendo 3DS Browser and Image Borders

This is a silly case.

The original Nintendo DS browser didn't bother with `border` or `border-radius` on images.

The Nintendo DSi browser improved upon this by adding `border`, but still not adding `border-radius`- and I still think this is understandable. There are _plenty_ of compromises over what is implemented to make this browser work.

When the Nintendo 3DS came on the scene, its browser was nearly identical to the DSi browser.

But finally, when the New Nintendo 3DS came out, it understood `border-radius`, applying it faithfully to images by beautifully rounding out their corners.

It was also clearly appended to the end of the list of CSS rules the browser would interpret, because the browser was applying `border` _before_ applying `border-radius`.

Look at how absolutely hysterical this is:

![My avatar, bordered then rounded, on the Nintendo 3DS browser](TODO)

### Process

## What could I do better?
