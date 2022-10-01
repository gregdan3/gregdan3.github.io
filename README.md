# Static Website Generator I Guess (SWGIG)

### Scraps

```sh
cat ./pages/toki-pona/index.md | grep -oP '\/sona\/[-\w]*.html' | sed 's|/sona/||g ; s|.html|.md|g' | xsel --clipboard
```

fetch all links from toki pona index

```vim
:%s/\([:.!?]\) \?/\1\r/g
```

newline-ify a document (better for smaller docs)
