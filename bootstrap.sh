#!/usr/bin/env bash

echo "Install software-properties-common"
sudo apt-get install software-properties-common

echo "install ansible repository"
sudo add-apt-repository ppa:ansible/ansible

echo "update"
sudo apt-get update

echo "install ansible"
sudo apt-get install ansible -y