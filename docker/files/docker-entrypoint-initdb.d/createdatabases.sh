#!/usr/bin/env bash

echo "creating db"
mongo tax-server \
        --host localhost \
        --port 27017 \
        -u $MONGODB_PRIMARY_ROOT_USER \
        -p $MONGODB_ROOT_PASSWORD \
        --authenticationDatabase admin \
        --eval "db.createUser({user: 'tax-server', pwd: '$MONGODB_PASSWORD', roles:[{role:'dbOwner', db: 'tax-server'}]});"