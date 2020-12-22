FROM node:15.4.0-alpine3.10

WORKDIR /app_frontend

COPY package*.json ./

RUN npm install

ENV PATH /app_frontend/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD ["start"]
