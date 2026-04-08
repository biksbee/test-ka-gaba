FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

COPY docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]