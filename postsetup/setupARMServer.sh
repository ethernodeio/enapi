#!/bin/sh
echo '\e[92m#################################################'
echo              'Installin EnOs stuff'
echo '#################################################\e[0m'
sudo apt update -y &&
sudo apt upgrade -y &&
sudo apt install -y build-essential &&
sudo apt install -y software-properties-common &&
sudo apt install -y git &&
sudo apt install -y wget && 
sudo apt install -y curl &&
sudo apt install -y redis-server &&
sudo apt install -y gyp &&
sudo apt install -y mongodb &&
sudo apt install -y golang-go &&
sudo apt install -y nodejs &&
sudo apt install -y npm &&
sudo apt install -y ntp &&
sudo apt install -y gcc &&
sudo apt install -y make &&
sudo apt update -y &&
sudo apt upgrade -y &&
echo
echo '\e[92m#################################################'
echo           'Installing docker for arm'
echo '#################################################\e[0m'
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - &&
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" &&
sudo apt-get update &&
sudo apt-cache policy docker-ce &&
sudo apt-get install -y docker-ce make &&
echo '\e[92m################################################'
echo 				'Installing certbot to secure it all'
echo '#################################################\e[0m'
sudo add-apt-repository ppa:certbot/certbot -y &&
sudo apt update -y &&
sudo apt install python-certbot-nginx -y &&
echo '#################################################'
echo              'Setting uptime zone'
echo '#################################################'
sudo dpkg-reconfigure tzdata &&
echo '#################################################'
echo        'Cleaning up Image after install'
echo '#################################################'
apt clean &&
apt autoremove -y