FROM node:lts-alpine as setup
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ENV, EXPOSE and RUN are added in github workflow
