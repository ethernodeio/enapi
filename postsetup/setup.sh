#!/bin/sh
echo '\e[92m#################################################'
echo              'Updating and Installing'
echo '#################################################\e[0m'
sudo apt update -y &&
sudo apt upgrade -y &&
sudo apt install -y build-essential &&
sudo apt install -y software-properties-common &&
sudo apt install -y git wget curl redis-server gyp mongodb golang-go nodejs npm ntp gcc make &&
sudo apt update -y &&
sudo apt upgrade -y &&
echo
echo '\e[92m#################################################'
echo 							'Installing Docker for Ubuntu'
echo '#################################################\e[0m'
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - &&
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" &&
sudo apt-get update &&
sudo apt-cache policy docker-ce &&
sudo apt-get install -y docker-ce make &&
sudo usermod -aG docker $USER
echo '\e[92m################################################'
echo 				'Pulling Docker Images for multi-geth x86'
echo '#################################################\e[0m'
sudo docker pull bakon3/multigethx86 &&
echo '\e[92m################################################'
echo 	    'Creating Directories for Persistent Storage'
echo '#################################################\e[0m'
sudo mkdir -p /media/ssd/.multigeth &&
echo '\e[92m################################################'
echo 	    'Creating Directories for Persistent Storage'
echo '#################################################\e[0m'
sudo npm install &&
sudo npm run typings &&
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