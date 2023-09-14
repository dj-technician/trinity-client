# trinity front deploy
FROM node:20-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn install
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
