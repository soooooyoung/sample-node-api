#!/bin/bash
set -e
#VERSION=$(git rev-list HEAD --count)
VERSION='1.0.4'
docker build -t shanabunny/test:${VERSION} .
docker push shanabunny/test:${VERSION}

echo ${VERSION}

