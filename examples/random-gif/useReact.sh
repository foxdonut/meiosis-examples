#!/bin/bash
for F in `grep -l '^//react' $(find src -type f)`
do
  echo '%s/\/\/react/\/\*react\*\//
%s/\/\*mithril\*\//\/\/mithril/
wq' | ed $F
done