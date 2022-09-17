#!/bin/bash
echo "[$0]"
(
    set -e

    cd src/nextjs-blog
    npm run dev
)
if [ $? == 0 ] ; then
    echo "[$0 OK]"
else
    echo "[$0 FAILED - $?]"
    exit 1
fi