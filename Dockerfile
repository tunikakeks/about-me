FROM node:17.7.2

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN yarn install

COPY . .

RUN yarn build

#expose port 3000 on 9515
EXPOSE 3000:9515

CMD [ "yarn", "start" ]