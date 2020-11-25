FROM node:6.11-alpine
WORKDIR /app
COPY ./app/
RUN npm config set registry http://nexus.daocloud.io/repository/dacloud-npm
RUN npm install

EXPOSE 3000

CMD npm start
