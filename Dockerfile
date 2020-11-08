# The FROM instruction uses an existing docker image as a base
FROM node:alpine

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]