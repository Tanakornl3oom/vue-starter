FROM node:8-alpine

RUN mkdir -p /client/
# Copy or mount node app here
WORKDIR /client/

COPY . /client/

RUN rm -rf node_modules


RUN npm install


EXPOSE 8080


CMD ["npm","run", "serve"]