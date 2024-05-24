FROM node

WORKDIR /client

COPY package*.json /client/

RUN npm install --force

COPY . /client/

EXPOSE 3000
CMD ["npm","start"]