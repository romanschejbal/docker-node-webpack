FROM node

COPY . /var/www

WORKDIR /var/www

RUN npm install
CMD npm start & npm run server