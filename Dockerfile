FROM ruby:2.6.0
USER root
RUN mkdir /pokesystem
WORKDIR /pokesystem

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs gnupg curl

COPY ./pokesystem /pokesystem

RUN npm install -g yarn && npm install && yarn install
RUN bundle install
