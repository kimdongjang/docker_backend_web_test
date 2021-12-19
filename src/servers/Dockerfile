FROM node:14.15.3-alpine
MAINTAINER kimdongjang

RUN mkdir /app
WORKDIR /usr/src/app

COPY package.json .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --no-cache

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]