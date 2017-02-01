#!/usr/bin/env bash

echo "install software-properties-common"
apt-get install software-properties-common

echo "install ansible repository"
add-apt-repository ppa:ansible/ansible

echo "update"
apt-get update

echo "install ansible"
apt-get install ansible -y

cd /vagrant

echo "ansible playbook"
ansible-playbook playbook.yml --inventory-file=inventory.ini --connection=local