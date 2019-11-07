# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./package.json
COPY . .

RUN npm install 
EXPOSE 3000
# start app
RUN ls 
RUN pwd
CMD ["npm", "start"]