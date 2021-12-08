FROM node:14

RUN apt-get update && apt-get install -y apt-utils cron dos2unix

COPY app /app

WORKDIR /app
RUN npm ci

ADD crontab /etc/cron.d/jakob
RUN chmod 0644 /etc/cron.d/jakob
RUN dos2unix /etc/cron.d/jakob

RUN touch /var/log/cron.log

CMD cron && npm start
