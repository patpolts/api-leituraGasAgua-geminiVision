FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN mkdir -p /app/uploads

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]
