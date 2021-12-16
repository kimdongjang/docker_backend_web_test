FROM node:14.15.3-alpine
MAINTAINER kimdongjang

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --no-cache

COPY . /app
CMD ["npm", "run", "dev"]