FROM node:16-alpine

USER root

RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app

COPY . .