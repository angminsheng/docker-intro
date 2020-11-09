# The FROM instruction uses an existing docker image as a base
FROM node:alpine as base

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

FROM base as dev

RUN npm config set unsafe-perm true && npm install -g nodemon

COPY ./ ./

CMD ["npm", "start"]

FROM base as prod

COPY ./ ./

CMD ["npm", "build"]
