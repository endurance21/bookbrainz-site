# Running the NodeJS server outside of Docker

### These instruction are only valid for specific cases when you do not want to use Docker (`./develop.sh`) to run the server on your machine.

If for some reason you do not want to use our standard development environment (Docker), you can run the server code manually (
regardless of whether you are running dependencies (database, search,…) with Docker or you [are running them manually](./MANUAL_INSTALL.md))

## Installing NodeJS

To install NodeJS, follow the instruction for your operating system on the [official website](https://nodejs.org/en/download/)


## Installing Packages
The site depends on a number of node packages which can be installed using npm:

    cd bookbrainz-site/
    npm install

This command will also compile the site LESS and JavaScript source files.

## Configuration

Our `config.example.json` is set up to work out of the box running everything in Docker. Addresses for the dependencies refer to docker container names, so that containers can communicate with each other.

For local development (run outside of Docker), make a copy of `config/config.local.json.example` and [fill up the musicbrainz tokens](README.md#configuration). You can then pass this configuration file when running the server locally using `--config` flag.
For example, `npm start -- --config ./config/config.local.json` will use `./config/config.local.json` config instead of the Default config (`config.json` for Docker).


## Building and running
A number of subcommands exist to manage the installation and run the server.
These are described here; any commands not listed should not be called directly:

* start - start the server in production mode, with code built once
* [debug - start the server in debug mode, with code watched for changes](#watch-files-and-live-reload-with-webpack)
* lint - check the code for syntax and style issues
* test - perform linting and attempt to compile the code
* jsdoc - build the documentation for JSDoc annotated functions within the
  code

<br/>

# Debugging with VSCode
You can use VSCode to run the server or API and take advantage of its debugger, an invaluable tool I highly recommend you learn to use.

This will allow you to put breakpoints to stop and inspect the code and variables during its execution, advance code execution line by line and step into function calls, instead of putting `console.log` calls everywhere.

Here is [a good introduction](https://www.youtube.com/watch?v=yFtU6_UaOtA) to debugging javascript in VSCode.

There are VSCode configuration files (in the `.vscode` folder) for running both the server and the tests, useful in both cases to debug into the code and see what is happening as the code executes.
Make sure the dependencies (postgres, redis, elasticsearch) are running, and you can just open the debugger tray in VSCode, select 'Launch Program' and click the button!

BookBrainz uses [Flow](https://flow.org) as a javascript typechecking library. VSCode is partial to Typescript, and needs to be configured to avoid confusion.
We recommend you install the flow-for-vscode extension and [follow this setup step](https://github.com/flowtype/flow-for-vscode#setup):
`Set [VSCode configuration] javascript.validate.enable option to false or completely disable the built-in TypeScript extension for your project`
