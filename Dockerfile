
FROM node:17

# create app directory
WORKDIR /usr/src/app

# copy package(-lock).json for installation of packages
COPY package*.json ./

# install packages
RUN npm install

# copy app over to dockercontainer
COPY . .

EXPOSE 1337
CMD [ "node", "app.js" ]
