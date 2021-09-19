FROM nginx:1.21
RUN mkdir /var/www
COPY dist/ /var/www
COPY webserver/default.conf /etc/nginx/conf.d/