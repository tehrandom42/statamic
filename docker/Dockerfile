FROM ubuntu:bionic
ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=America/Detroit
RUN apt update -y
RUN apt upgrade -y
RUN apt install -y apache2 php php7.2-curl php7.2-fileinfo php7.2-gd php7.2-mbstring php7.2-tokenizer php7.2-xml php7.2-xmlwriter php7.2-zip unzip wget composer nano
RUN a2enmod rewrite
RUN rm -rfv /var/www/html	
RUN ln -sf /home/carsim.com /var/www/html
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN sed -i "s/;date.timezone =/date.timezone = America\/Detroit/g" /etc/php/7.2/apache2/php.ini
RUN sed -i "s/memory_limit = 128M/memory_limit = 512M/g" /etc/php/7.2/apache2/php.ini
RUN echo "ServerName carsim.test" >> /etc/apache2/apache2.conf
COPY 000-default.conf /etc/apache2/sites-available
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
EXPOSE 80