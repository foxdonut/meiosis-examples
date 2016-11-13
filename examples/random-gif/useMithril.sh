#!/bin/bash
for F in `grep -l '^//mithril' $(find src -type f)`
do
  echo '%s/\/\/mithril/\/\*mithril\*\//
%s/\/\*react\*\//\/\/react/
wq' | ed $F
done