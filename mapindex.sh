#!/bin/bash
cat templates/map_header.md

cd pages || exit

tree=$(tree -tf --noreport --charset ascii mind-map* |
       sed -e 's/| \+/  /g' -e 's/[|`]-\+/ */g' -e 's:\(* \)\(\(.*/\)\([^/]\+\)\):\1[\4](\2):g' -e 's/\.md/\.html/g' -e 's/mind-map\///g'|
       tail +2)

echo -n "$tree"
