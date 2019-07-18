<p align="center">
  <img src="https://github.com/ethernodeio/enapi/blob/dev/logo.png" width="350" title="enAPI: Supercharge your blockchan node managment">
</p>

enAPI nodeJS json-rpc 2.0 API and tools to easily spin up blockchain nodes and build dapps on top of.

Please check out the enApi docs in the OpenRPC playground: [DOCS](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/ethernodeio/enapi/master/openrpc.json&uiSchema%5BappBar%5D%5Bui:title%5D=enApi&uiSchema%5BappBar%5D%5Bui:logoUrl%5D=https://github.com/ethernodeio/enapi/blob/dev/logo.png&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:splitView%5D=false&uiSchema%5BappBar%5D%5Bui:darkMode%5D=true)

To start using enAPI today, you will need a linux distribution, like Ubuntu.

Afterwards make sure you have at least git installed and clone this repo.

Once you have the enApi repo clone there is two sh files included in the `postsetup` directory.

You can execute those on a debian/ubuntu based system depending on your CPU architecture ARM or x86.

If you are working with another distro, all you will need to have pre installed is: Docker, nodeJS, NPM, and mongoDB.

Once you have docker installed you will need to pull our docker container for multi-geth, depending on your CPU architecture.

Again your options are ARM and x86.

For x86 devices run `sudo docker pull bakon3/multigethx86` 
And for ARM based devices run `sudo docker pull bakon3/multigetharm`

After you have the docker images available, go ahead and CD into you the enApi directory and run: `npm install`

This will install all dependencies for enApi to run, once all dependencies are finished running, one last step is to run: `npm run typings` to make sure all type of are decalred.

Last step before starting up enApi, is to create the persistant storage directory, currently it's set for  `/media/ssd/.multigeth/` In this directory the node software will store it's chain data and IPC files.  This also allows for easy node client updates without losing the chaindata after every upgrade and restart.

So go ahead and create it, `sudo mkdir -p /media/ssd/.multigeth/`

And you should be able to run enApi with: `sudo npm start`

### Contributing

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.
