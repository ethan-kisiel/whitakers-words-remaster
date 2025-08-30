# Stage 1: Build the Vite application
FROM node:20-alpine as builder

WORKDIR /app


COPY words-frontend .
RUN npm ci

RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]