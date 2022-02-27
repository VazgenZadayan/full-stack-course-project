FROM node:14 as node_client

WORKDIR /app/client

COPY client /app/client
RUN npm install


RUN npm run build


FROM node:alpine

WORKDIR /app

COPY server/package.json /app

RUN npm install

COPY server /app

COPY --from=node_client /app/client/build /app/client

EXPOSE 8080

CMD [ "npm", "run", "start" ]