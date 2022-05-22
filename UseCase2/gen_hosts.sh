#!/bin/bash

ansible-playbook prepare_hosts.yml > /tmp/nooutput

# cat hosts-list

cat hosts-dy.json