FROM node:8-alpine

RUN mkdir -p /server/
# Copy or mount node app here
WORKDIR /server/

COPY . /server/

RUN rm -rf node_modules

RUN npm install


EXPOSE 3000


CMD ["npm", "start"]