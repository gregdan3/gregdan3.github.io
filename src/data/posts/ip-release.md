---
title: How to re-lease your IP on Linux
author: gregdan3
date: 2024-02-01
description: It's sillier than you think.
published: True
---

## Too long, didn't read

If you use `systemd-resolved` and are dealing with a single wireless network device,

```sh
sudo dhclient -r wlan0
sudo systemd-resolve --flush-caches
sudo systemctl restart systemd-resolved
sudo dhclient wlan0
```

This translates to:

1. Release lease on target network device
2. Flush DNS cache
3. Restart DNS resolution service
4. Request a new lease on target network device

You may not already have `dhclient`; it's just a controller, not a service, so installing it after the fact will still work.

## Wait, that's it?

Well, no. This is why I provided the translation: If you don't use the specific tools or services that I do, you can still go looking for those four _translated_ instructions as they apply to your DNS service and its interactions with your local DHCP server.

You see, my first instinct to figure this out was to google it, but that turned up a dozen different low-context answers, all spread across fifteen years of changes to the Linux network stack. I spent 45 minutes answering this question because I started with the question that is the title of this article: "How to re-lease your IP on Linux." Through that process, I discovered the components of the question:

<!-- prettier-ignore -->
*[google]: to search the internet using a search engine

1. How does my device keep track of the IP it got from the DHCP server?
2. When my device disconnects from a network, how does it (sometimes) still get the same IP back when it reconnects later?
3. How can I convince the DHCP server to send me a new IP, rather than the one I already had?

If your DHCP server provides you an undesirable IP for any reason, this is a way to gamble for a new one.

## But why would I do that?

If you found this article, you probably already know why: you leased an undesirable IP address on your device and want a new one. This could be because your IP belonged to another device before and that device lost its lease while offline. It could also be because you changed the IPs your DHCP server hands out, but your devices still have their old leases.

## This article is a stub.
