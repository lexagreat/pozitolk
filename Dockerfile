
FROM node:18 as base
ENV NODE_ENV=production

WORKDIR /root/frontend

# build
FROM base as build

COPY --link package*.json .
RUN yarn install --production=false

COPY --link . .

RUN yarn build

# run
FROM base
COPY --from=build /root/frontend/.output /root/frontend/.output

CMD [ "node", ".output/server/index.mjs" ]