FROM node:14
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]