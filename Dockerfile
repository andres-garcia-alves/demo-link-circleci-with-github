FROM node:slim
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN useradd -ms /bin/bash demo-user
USER demo-user

CMD ["node", "src/index.js"] 
