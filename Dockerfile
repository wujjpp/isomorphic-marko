FROM node:6.10.2-alpine

# Copy application files
COPY ./build /usr/local/marko-starter-kit/
WORKDIR /usr/local/marko-starter-kit/

# Install Node.js dependencies
# For chinese user, please unmark the follow code for improving building performance
# RUM npm config set registry=http://registry.npm.taobao.org
RUN npm install

CMD [ "node", "server.js" ]
