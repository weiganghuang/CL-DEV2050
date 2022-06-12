#!/bin/bash

ansible-playbook prepare_hosts.yml > /tmp/nooutput

cat hosts-dy.json
