FROM ruby:2.5.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /pokesystem
WORKDIR /pokesystem

COPY ./pokesystem /pokesystem

RUN bundle install
