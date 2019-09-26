#!/bin/bash

./pack.sh

cp -r messanger-linux-x64 /opt/messanger
ln -s /opt/messanger/messanger /usr/local/bin/messanger