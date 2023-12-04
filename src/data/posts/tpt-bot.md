---
title: Detecting Toki Pona
author: gregdan3
date: 2023-11-13
description: Natural Language Processing? No, I have a computer, thank you.
published: false
---

<!-- toc -->

- [Levels](#levels)
  - [sitelen Lasina taso / only Latin script](#sitelen-lasina-taso--only-latin-script)
    - [Vocabulary Enforcement](#vocabulary-enforcement)
    - [Regex, but you can make illegal sounds](#regex-but-you-can-make-illegal-sounds)
    - [Regex, but you can't make illegal sounds](#regex-but-you-cant-make-illegal-sounds)
  - [sitelen ante / Different scripts](#sitelen-ante--different-scripts)
    - [Level one: a regex for each](#level-one-a-regex-for-each)

<!-- tocstop -->

#

If you want to detect Toki Pona being written without other languages present, there are many different approaches with different trade-offs. You may choose to be highly strict, enforcing speech at the vocabulary level- a practical task in a language with less than 150 words. You may choose to be more loose, especially in allowing for names, and use a regex-centric solution. Then, you may be

## sitelen Lasina taso / only Latin script

#### Vocabulary Enforcement

#### Regex, but you can make illegal sounds

#### Regex, but you can't make illegal sounds

## sitelen ante / Different scripts

#### Level one: a regex for each

You can reiterate all the different regex strategies applied to Latin script for every writing system.
