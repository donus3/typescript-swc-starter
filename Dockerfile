# Builder
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY src ./
COPY tsconfig.json ./
COPY jest.config.js ./
COPY .eslintrc ./
COPY .eslintignore ./
COPY .prettierrc ./
RUN yarn lint
RUN yarn test
RUN yarn build

# Executor
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY --from=builder /app/dist ./dist

CMD [ "node", "dist/index.js" ]
