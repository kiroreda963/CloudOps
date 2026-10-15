From node:22-alpine
workdir /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY src/ ./src/
USER node
EXPOSE 3000
CMD ["node", "src/server.js"]
