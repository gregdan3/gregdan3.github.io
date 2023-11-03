---
title: Learning Svelte
author: gregdan3
date: 2023-11-01
description: toki pona li pona tawa sina la o kama sona e ona tan mi.
published: true
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
