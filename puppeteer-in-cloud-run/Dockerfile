FROM node:14-alpine

RUN apk add --no-cache chromium
COPY . .
RUN npm ci
ENV PORT 8080
CMD ["npm", "start"]
