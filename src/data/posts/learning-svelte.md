---
title: Learning Svelte
author: gregdan3
date: 2023-11-01
description: toki pona li pona tawa sina la o kama sona e ona tan mi.
published: false
---

I am not a web developer.

I do backend. Databases. Devops. I don't know or care how shiny the data looks

But things change. The world moves fast. And I want people to see the things I make, because that gets me cool jobs and opportunities. Here we are!

If you're reading this, I rewrote my personal site using Svelte and published it. Here's what I learned on the way.

- For starters, my JS knowledge is actually _pretty bad_. I've written [some](https://mun.la) [stuff](https://coolspacethings.neocities.org), but nothing I'd call competent from a web dev point of view.

---

- I figured out how to use component libraries.
- I decided amongst about a dozen of them- I'm lazy, so I went with [Flowbite](TODO) and [Skeleton](TODO) which provide tons of ready-made components. The runner up was [ShadCN](TODO)

---

- I ran into incredibly silly errors I should have been able to fix-

```
Error: <MyFooterLink> is not a valid SSR component. You may need to review your build config to ensure that dependencies are co
mpiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <MyFooterLink>.
```

Turns out, you can't import a Component `as` by default; you have to use the default import. But! You can name it whatever you want:

    import MyFooterLink from '$lib/components/FooterLink.svelte';

---

I wrestled with passing a component as a prop to Svelte. Turns out it was way easier than I realized.

---

I got to experience the simple joy of making a button light up a nice color when you hover it. It's so lovely.

---

I spent an embarassing amount of time trying to get the page selector on `/blog` to both center and stick to the bottom of the `article`.

The generally recommended way seemed to be that its parent element have `flex flex-col justify-end`, because then the last element inside the parent would be pushed to the bottom of the available vertical space. So I tried it!

I quickly learned that couldn't just apply `flex` to my `article`, because that would _obliterate_ the typography styles from Tailwind- particularly the spacing between elements.

This did place the page selector correctly, but also mangled every other page on the entire site. The ultimate goal was to have a single competent layout for every page, and this made my layout notably incompetent, so I threw out this plan.

...

The next idea was to make the `article` `relative` and have the entire blog page be `absolute`, then fiddle with the contained elements until they were spaced correctly against the `article`. The benefit of using `relative` over `flex` was that `relative` only starts to matter once any of its immediate children have `absolute`. Still, this plan immediately backfired. The `article` no longer had any content with size- the `article` would, correctly, squash to the size of the screen minus the header and footer, and my blog entry elements would stick out of the bottom of the footer if the screen were too small. Hilarious!

Those of you who actually know CSS might have realized that I was going to _way_ more effort than necessary in the above. I realized maybe an hour later that I could just make the `div` around my page selector `absolute`, then three more classes would make it look padded against the `article` bottom.

The solution, in hindsite, was terribly simple. I love when that happens.

- The main `+layout.svelte` was delivering an `article` component with tons of styles from the `app.postcss`.
- I also couldn't just

---
