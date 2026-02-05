FROM node:20

WORKDIR /server 

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"]