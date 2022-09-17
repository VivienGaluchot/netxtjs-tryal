#!/bin/bash
echo "[$0]"
(
    set -e

    INITIAL_COMMIT=$(git show --oneline -s)

    rm -rf /tmp/server
    cp -r src/nextjs-blog/.next/server /tmp/server

    git checkout github-page

    rm -rf server
    mv /tmp/server server

    git add server
    git commit --allow-empty -m "Deploy from commit $INITIAL_COMMIT"
    git push
)
if [ $? == 0 ] ; then
    echo "[$0 OK]"
else
    echo "[$0 FAILED - $?]"
    exit 1
fi