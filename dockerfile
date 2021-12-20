FROM node:14.15.3-alpine
MAINTAINER kimdongjang

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package.json
 
RUN npm install --no-cache
 
# 서버 소스 복사
COPY . /app

EXPOSE 8080

CMD ["npm", "run", "dev"]