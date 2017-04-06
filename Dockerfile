FROM node:6.10.2-alpine

# Copy application files
COPY ./build /usr/local/marko-starter-kit/
WORKDIR /usr/local/marko-starter-kit/

# Install Node.js dependencies
RUN npm install

CMD [ "node", "server.js" ]
