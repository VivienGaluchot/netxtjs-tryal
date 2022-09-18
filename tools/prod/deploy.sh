#!/bin/bash
echo "[$0]"
(
    set -e

    INITIAL_COMMIT=$(git show --oneline -s)

    rm -rf /tmp/public
    cp -r src/nextjs-blog/out /tmp/public

    if [ "$1" == "--discard-diffs" ]; then
        echo "Discard diffs"
        git diff
        git checkout -f github-page
    else
        git checkout github-page
    fi

    rm -rf public
    mv /tmp/public public
    touch public/.nojekyll

    git add public
    git commit --allow-empty -m "Deploy from commit $INITIAL_COMMIT"
    git push
)
if [ $? == 0 ] ; then
    echo "[$0 OK]"
else
    echo "[$0 FAILED - $?]"
    exit 1
fi