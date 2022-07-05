#!/bin/sh

# Start nginx and the graphQL server in the foreground
exec nginx -g daemon off & node $(dirname $0)/../server/index.js && fg
