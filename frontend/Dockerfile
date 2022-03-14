FROM node:15.11.0-alpine
MAINTAINER KIMDONGJANG

RUN mkdir /server
WORKDIR /server
ENV PATH /server/node_modules/.bin:$PATH
COPY package.json /server/package.json

RUN npm install --no-cache
#RUN apk add --no-cache git

COPY . /server
CMD ["npm", "run", "server"]