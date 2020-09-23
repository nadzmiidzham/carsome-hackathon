# load NodeJs 12.18.3 docker image
FROM node:12.18.3 AS development

# set work directory
WORKDIR /app

# install node packages
COPY package*.json ./
RUN npm install

# build app
COPY . .
RUN npm run build



# load NodeJs 12.18.3 docker image
FROM node:12.18.3 AS production

# set work directory
WORKDIR /app

# install node packages
COPY package*.json ./
RUN npm install

# copy dist folder from development stage
COPY .env .
COPY . .
COPY --from=development /app/dist ./dist

# expose port
EXPOSE 3000

# on container run, run command
CMD [ "npm", "run", "start:prod" ]
