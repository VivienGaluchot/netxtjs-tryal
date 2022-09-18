#!/bin/bash
echo "[$0]"
(
    cd src/nextjs-blog
    npm install

    export BASE_PATH="/nextjs-tryal/public"

    npm run "build"
    npm run "export"
)
if [ $? == 0 ] ; then
    echo "[$0 OK]"
else
    echo "[$0 FAILED - $?]"
    exit 1
fi