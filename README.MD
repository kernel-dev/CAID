# CAID

A Client-side avatar injector for Discord (BetterDiscord plugin.)

## Usage

Right-click any server icon, ~~or user (DM) icon~~[^1] - and you can see the `Set Avatar URL` option; <br />
provide a link, and click `Apply`—that's it!

[^1]: As of 12/06/2022, I've found out that the frontend API for Discord has been slightly reworked. It is no longer an component called `DMUserContextMenu`; but rather, it's a `MenuGroup` instance now with its children that are of type `MenuItem`; requires refactoring to accommodate for such.