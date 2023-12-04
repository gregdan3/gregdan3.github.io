---
title: Protecting your Discord Community
author: gregdan3
date: 2023-11-13
description: I mod a 10k+ and a 4k+ member server. This is my collected advice.
published: false
---

# Summary

- Enable Community.
- Require at least email verification for accounts.
<!-- Except for phone verification, higher levels are useless. I don't recommend phone verification except in dire circumstances. -->
- Enable 2FA for mod actions.
- Enable raid protection.
- <details><summary>Disable creating threads. Use forum channels instead.</summary>
  Optionally create a role which re-enables threads, assigning it to trusted users. I don't recommend allowing threads.</details>
- <details><summary>Disable image and link embedding if under attack.</summary>
  Optionally create a role which re-enables these and assign it to trusted users. You could use a bot to automatically assign the role after a set time or number of posts. </details>
- Explore other bots for moderation. I highly recommend [YAGPDB](https://yagpdb.xyz/).
- You can use bots to enforce higher levels of verification than Discord enables.
  <!-- Some users will repeatedly evade bans to attack your community.  -->
  <!-- If your server is going through a specific attack distinct from a raid, read the guide at the bottom of this document, and reach out for more help if you need. -->
- If you need details, justifications, or help on where to find one of these settings, read the rest of the document or reach out for help.

# Contents

# Foreword

If you are a moderator or admin of a Discord server, especially one adjacent to the Toki Pona community, it is highly recommended you read the following document **in full**.

Nothing in this document can be as secure as never allowing anyone to join your server, or locking down every possible permission, or forcing every user to go through a detailed and thorough background check, or otherwise bricking your community. This isn't the goal. Moderation is not a perfect system, and cannot prevent all forms of abuse. However, we can design the permissions of a server to compromise between "nobody may enter or leave" and "the oldest anarchy server on Discord" without harming the community itself.

The goal of taking these steps is to minimize the surface area for a potential attack while not compromising the functionality of the server for normal users.

# Discord's Safety Settings

It is **highly recommended** that you enable Community in `Server Settings -> Enable Community -> Get Started`. This will obligate media scanning and disables dangerous permissions for `@everyone` to have. This does not require you to make the server public, be listed in Discovery, or otherwise change the visibility or invite rules of your server.

### Basic configuration

All configuration options start in `Server Settings`, found by right clicking your server icon on the sidebar or left clicking your server's name at the top of the channel menu.
All steps are recommended.

- Enable account verification to at least require a verified email: `Safety Setup -> DM and Spam Protection -> Verification Level`. It is recommended you enable all settings on this menu if they are not already set.
- Require 2FA for mod actions: `Safety Setup -> Permissions -> Require 2FA for mod actions`. If any of your mods' accounts are compromised, the attacker should still be unable to perform mod actions without also acquiring the account's 2 factor codes, which is unlikely.
- Enable raid protection: `Safety Setup -> Raid Protection and CAPTCHA`.
- Disable creating threads: `Roles -> Default Permissions -> Create Public Threads, Create Private Threads`. Anyone being able to create threads on any channel is a moderation nightmare, as problems can easily be hidden for days before brought to your attention. As an alternative, enable Community and create forum channels.

### Permissions and Roles

Editing the permissions of your server should be as easy as possible. I can't guide you through the exact steps to set up every category and channel and permission in your server, but I can provide useful

### Automod

If your server is targeted at 13 and 14 year olds, entirely English speaking, never swears, never farts, and isn't interesting, you should enable the default Automod at .

### Further levels of Discord's default verification

Previously, I recommended setting the verification level to at least require a verified email. There are further levels of verification added onto this, such as requiring the user to have been on Discord for at least five minutes, requiring them to be in your server for ten minutes, and requiring a phone number. You may notice that there is a **massive** leap between the two prior steps and requiring a phone number. As a moderator, part of your goal should be to

You may push this as high as requiring a phone number, but many regular users do not want to provide their phone to Discord and are justified in this.

### Images and Link Embedding

**This option meaningfully alters the server for normal users. Proceed with caution**.

If your community is under attack, one of the common attacks you'll see is posting shock images of various kinds.

To prevent this, it is **highly recommended** to disable both image sending and link embedding in `Roles -> Default Permissions -> Attach Files, Embed Links`.

Both of these are common in all servers, to the point that a server without images and link embeds is discomfortingly empty.

To safely restore the permission, create a secondary role with a name of your choice that has no other permissions but those two, and assign it to users you trust.

In **ma pona pi toki pona**, we happen to still have a previous verification role- if your server is old enough to have such a role, changing its purpose to restoring image/link embed permissions is an excellent decision.

A bot can be used to assign a target role after a user has sent a sufficient number of messages or remained in the server for a sufficient period of time.

# YAGPDB

# Other Bots

# ETC.

### A persistent, specific abuser

If this document was given to you by @gregdan3 or another moderator of **ma pona pi toki pona**, you are likely aware of a specific abusive user who has targeted the Toki Pona community at large. We keep track of [this list](https://gist.github.com/gregdan3/3d030628ed88f6cfff662e393ae91de2) of their known alts, as well as its corresponding
