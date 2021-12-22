FROM node:lts AS development

ENV CI=true
ENV PORT=3000

WORKDIR /server
COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json
RUN npm ci
COPY . /server

CMD [ "npm", "start" ]

FROM development AS builder

RUN npm run build

FROM nginx:1.13-alpine

COPY --from=builder /server/build /usr/share/nginx/html