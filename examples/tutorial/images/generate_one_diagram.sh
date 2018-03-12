#!/bin/bash
# need npm i -g svgexport
EXT=svg
TEMPSVG=tempsvg.svg
SRC=$1
DEST=$(echo $SRC | sed -e 's/src\//eps\//' -e "s/\.dot$/.$EXT/") && \
PNG=$(echo $DEST | sed -e "s/\.$EXT/.png/") && \
echo $SRC '->' $TEMPSVG &&\
dot -T$EXT -Nshape=record -Nmargin=0.05 -Nfontsize=10pt -Nfontname=helvetica -Efontsize=10pt -Efontname=helvetica -Ecolor=maroon -Efontcolor=navy -Gnodesep=0.2 -o $TEMPSVG $SRC && \
svgexport $TEMPSVG $PNG
echo 'Cleanup..' && \
rm $TEMPSVG && \
echo 'Done.'
