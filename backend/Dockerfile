FROM node:lts
MAINTAINER kimdongjang

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /server


# default to port 80 for node, and 9229 and 9230 (tests) for debug
ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT 8080

COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json
RUN npm install --no-cache


# copy in our source code last, as it changes the most
#COPY . /code
COPY . /server

# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly. Note the code in index.js is needed to catch Docker signals
# using node here is still more graceful stopping then npm with --init afaik
# I still can't come up with a good production way to run with npm and graceful shutdown
CMD [ "node", "src/index.js" ]