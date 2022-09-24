# Static Website Generator I Guess (SWGIG)

### Scraps

```sh
cat ../index.md | grep -oP '\/sona\/[-\w]*.html' | sed 's|/sona/||g ; s|.html|.md|g' | xsel --clipboard
```
