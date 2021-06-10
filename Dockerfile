# pull the official base image
FROM node:12.18-alpine

# set working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --unsafe-perm=true --allow-root

# add app
COPY . ./

# RUN chown -R 1000:1000 ./
RUN chown -R 1000:0 /app && chmod -R ug+rwx /app
USER 1000
# start app
CMD ["npm", "start"]
