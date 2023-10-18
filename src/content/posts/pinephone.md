---
title: Pinephone Thinking
author: gregdan3
date: 2021-05-20
description:
published: true
---

I can't wait to get the keyboard.

<!-- cut -->

# The Pinephone, by Pine64

## Preface

This phone is not yet in a position to replace your daily driver, especially if
you own a flagship from the past three years or so. You will almost certainly
need to tinker, connect a keyboard to fix something with, and encounter bugs
ranging from inconvenient to debilitating. The battery life is improving with
every batch of software updates, but it still doesn't last long. Putting
mainline Linux on a phone is hard, and living with mainline Linux on your phone
isn't much easier. The only phones the Pinephone could replace for an every-day
user would be the supremely cheap Android burners available at Walmart.

## My Pinephone

I purchased the higher-spec Beta Edition in March 2021, and it arrived in early
May. It came pre-loaded with Manjaro running KDE Plasma Mobile. I would've liked
to switch to Phosh (Librem's mobile UI, as I understand) and try that on
Manjaro, but I found myself repeatedly frustrated with Manjaro and jumped ship
to [Archlinux ARM](https://github.com/dreemurrs-embedded/Pine64-Arch/).

## First Impressions

The Pinephone does an excellent job of presentation. The phone has a high build
quality and sleek look, and the UI that came by default is responsive, well
designed, and intuitive.

My phone was one of the few affected with the [battery tightness
error](https://wiki.pine64.org/index.php?title=PinePhone_FAQ#The_battery_is_stuck_inside_the_phone)
from the factory; fortunately, I had a screwdriver available that was small
enough to unscrew the body screws and loosen the battery enough to perform first
time boot.

## Bugs I Encountered

When I said that the device isn't ready for every day users, I meant it. I
experienced a whole list of fascinating and unique bugs on about every update.
Some were minor, and others made the device unusable.

### Manjaro - KDE Plasma Mobile

Everything here is something I experienced while on the Pinephone as delivered,
operating system and all.

- If you have an external display plugged in, clicking the exact upper left
  corner of that display will crash the device. I assume this is possible with
  just the touch display, but I wasn't able to prove it.
- If you have an external display plugged in, the Pinephone's own display will
  be offset to the left off the actual display.
- If you attempt to interact with the Discover app too quickly, the device will
  crash.
- If you interact with Discover-installed apps via your package manager, you may
  not be able to install or uninstall those apps from Discover anymore due to a
  dependency resolution error.
- While not plugged in, and regardless of device lock settings, the device will
  return to the lock screen and prompt for your passcode after a small number of
  inputs. This is temporarily stopped by a restart, but only for about one
  minute.

### Arch ARM - Librem's Phosh

I haven't dug into Arch ARM as much as I did with Manjaro! It was a good
experience for what I had; I felt Phosh was more responsive, and the
configurability was improved considerably over Manjaro. However, I don't have
any more specific notes than these for the time being.

## Complaints and concerns

Some of these are bug-flavored, but I consider them more of a poor design choice
than an error made by the developers.

- When initializing the phone for the first time, you are prompted for a
  passcode to enter. This passcode is also your user password, and you are a
  superuser, which is extremely concerning; These two should be independent from
  one another, so that you can have a numpad-only passcode and an actually
  secure superuser password. Note: this was the case on both Manjaro and Arch
  ARM.
- If you press and hold the power button while the screen is on, the device will
  immediately react to the power button being pressed and turn the screen off.
  This means the only way to access the standard power menu is to hold the power
  button while the screen is _off_, as the device will respond immediately to
  the power button and turn on, then load the power menu. This is silly!
- I probably should have been aware of this, but the device did not come with a
  wall brick for charging, only a power cable. I had to loan one over from a
  previous phone; fortunately, I had several to spare, but I could see somebody
  tripping over this when getting their own Pinephone in.
