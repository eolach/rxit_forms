FROM nginx:1.15.3

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist/rxit-forms .

CMD ["nginx", "-g", "daemon off;"]