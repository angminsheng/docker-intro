# docker-intro
# Docker introduction
This repository is created as an introduction to docker, the repository will have a few branches each with different progress of the introduction.

## Introduction to Docker
### Docker Client

```sh
docker run <image-name>
```
Create and run a container from an image
E.g. `docker run hello-world`

```sh
docker run <image-name> <override-default-commands>
```
Remember that an image container not only have the file system snapshot but also a startup command, and we are able to override the startup command when we run a container.
E.g. `docker run busybox ls`

```sh
docker ps
```
List all the running containers

```sh
docker create
```
```sh
docker start
```
docker run = docker create + docker start

`docker create` prepares or setup the file system defined in the image.
`docker start` runs the startup command.

`docker start -a <container-id>` to start the container, the `-a` tag attach to the container output and forward  signal (print to our terminal)

```sh
docker log
```
Fetch the logs of container.

```sh
docker system prune
```
To remove unused data.

```sh
docker stop / docker kill
```
Main difference is that the stop sends a hardware signal sigterm `terminate signal`, the container running process will shut down on its own time `10s by default`.

Main difference is that the stop sends a hardware signal `sigterm` terminate signal, the container running process will shut down on its own time 10s by default.

```sh
docker exec
```
Run a command in a running container.
The IT flag -i -t
Every process created in the linux environment has 3 communication channels. docker run attach standard out `STDOUT` by default.
`-i` flag attach your terminal with standard in `stdin` channel.

```js
docker exec -it container-id command-processor
```
Alot of time you might want to run a lot of commands inside a container. Instead of always having to type docker exec, you can run a command processor (sh, zsh, bash, powershell etc.) and that command processor will be started inside the container.

```sh
docker build [-t <name>] <path>
```
Build an image from a Dockerfile. The set of files located in the path is called the build's context.
You can name and tag the image by using the -t flag. Convenion of naming your personal project: `<Docker Id>/<Project name>:<Version>`


## Part One
Creating a simple node application.
- To initialize your local directory with a package json, run
```js
npm init
```
You can also manually create your own `package.json`.

- Installing the required dependencies for our mini node application.
For this application we will be using [express.js](https://expressjs.com/)
```js
npm install express
```

## Part Two
Dockerize our node application.
- Here we will go through the main topic of the day where we will introduce docker into our project.
create a `Dockerfile` in our current directory.

Docker build with image tag
```js
docker build -t <name>/node-application .
```
Docker run built image
```js
docker run <name>/node-application
```

Docker run container in interactive mode
```js
docker run -it <name>/node-application sh
```

Docker exec to Run a command in a running container
```js
docker exec -it ff05df79856ea514fe8796c5248c1e1c0e2dbfd4a07a77515d96658ea61af7b7 sh
```

## PART Three
Adding a database to our node application and create a docker-compose file
- Here we will add a very basic redis database to our node application

```js
npm install redis
```

- We will use the `redis` image from the DockerHub to run a container with redis server

## PART Four
Introducing concept of docker volume

- Volumes are a special type of folder that is accessible by a docker container. Unlike regular folders, volumes have a life-cycle independent of the containers in which they’re mounted. That’s because they are stored outside of a container. Hence, volumes make it easy to persist data even when containers die to and share data between containers and the host.

- Host volumes allows us to mount a folder on our laptop into a container. It sync file changes between local host folder and a container folder, if we use a host volume to mount code we're working on into a container, changes to the code will appear in the container without rebuilding the container.

running host volume without using docker-compose
```js
docker run -it -p 8090:8090 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app <image>
```




## PART Five
Adding unit test to our node application and create a running container to watch and run unit test
```js
npm i jest
```
package.json
```json
"scripts":{
  "test": "jest --watchAll"
}
```

## PART Six
multistage build
```js
docker build . -t <appName> -target=imageName
```
