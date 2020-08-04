#!/bin/bash

cp -p .htaccess dist/
rsync -avh dist/ reinhar6@infosky.ch:~/www/cudeschin.infosky.ch --delete
