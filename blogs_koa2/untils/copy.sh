#!/bin/sh

cd D:/workspace/node_blog/logs
ls
cp access.log $(date +%Y-%m-%d-%H).access.log
echo "" > access.log

