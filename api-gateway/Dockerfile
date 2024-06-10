FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon

CMD ["nodemon", "--watch", "src", "--exec", "npm run start:dev"]