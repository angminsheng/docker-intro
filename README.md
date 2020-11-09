# docker-intro
# Docker introduction
This repository is created as an introduction to docker, the repository will have a few branches each with different progress of the introduction.

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


## PART Five
Adding unit test to our node application and create a running container to watch and run unit test

## PART Six
multistage build
```js
docker build . -t <appName> -target=imageName
```
