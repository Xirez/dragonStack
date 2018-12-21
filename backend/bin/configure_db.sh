#!/bin/bash

export PGPASSWORD='node_password'

echo "$(tput setaf 1)Configuring dragonstackdb, please WAIT $(tput setaf 7)"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./bin/sql/account.sql
psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql
psql -U node_user dragonstackdb < ./bin/sql/trait.sql
psql -U node_user dragonstackdb < ./bin/sql/dragonTrait.sql
psql -U node_user dragonstackdb < ./bin/sql/accountDragon.sql

node ./bin/insertTraits.js

echo "$(tput setaf 2)dragonstackdb configuration, DONE $(tput setaf 7)"