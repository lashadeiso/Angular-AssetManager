FROM node:16-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

COPY . .

EXPOSE 4200

CMD /app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check




