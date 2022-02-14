FROM nginx:1.21.4

COPY ./build /usr/share/nginx/html

EXPOSE 80

