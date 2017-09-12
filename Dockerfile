FROM node:argon

# Create app directory
RUN mkdir -p /home/xavi/Projects/docker/angular-webpack/
WORKDIR /home/xavi/Projects/docker/angular-webpack/

# Install app dependencies
COPY package.json /home/xavi/Projects/docker/angular-webpack/
RUN npm install

# Bundle app source
COPY . /home/xavi/Projects/docker/angular-webpack/

EXPOSE 8080
CMD [ "npm", "start" ]