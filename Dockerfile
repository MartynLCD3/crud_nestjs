FROM node:16.14.0-alpine
WORKDIR /app
RUN chmod 777 /app
COPY . .
USER 1000
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
