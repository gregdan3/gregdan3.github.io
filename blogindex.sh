#!/bin/bash
BLOGDIR=pages/blog

POSTS=$(ls ${BLOGDIR}/*.md -1 | sort)

RETURNDATE=""

# date is read from the 3rd %ed line
function getdate {
  FILEDATE=$(grep "^%" "$1" | sed '3q;d' | cut -d ' ' -f 2-)
  RETURNDATE=$(date -u --date="$FILEDATE" "+%s")
}

echo -n >blogdates.txt
for f in $POSTS; do
  getdate "$f"
  printf "%d\t%s\n" "$RETURNDATE" "$f" >>blogdates.txt
done

# sort by times
POSTS=$(cat blogdates.txt | sort -nr | cut -f 2-)

cat templates/blog_header.md

for f in $POSTS; do
  getdate "$f"
  MTIME=$RETURNDATE

  TITLE=$(head -n 1 "$f")
  TITLE=${TITLE#"% "}

  OUTPAGE=${f%.md}.html
  OUTPAGE=${OUTPAGE#"${BLOGDIR}/"}

  echo " * [$TITLE]($OUTPAGE) ($(date -d "@$MTIME" "+%Y-%m-%d"))"
done

rm blogdates.txt
