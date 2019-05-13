# pokemon-system
[![Build Status](https://travis-ci.com/fernand0aguilar/pokemon-system.svg?branch=master)](https://travis-ci.com/fernand0aguilar/pokemon-system)

### How to build

* clone the repository

* cd pokemon-system

* run via Docker
```
docker-compose build
docker-compose up

```

* run via rails local
```
cd pokesystem

rake db:create && rake db:schema:load && rake db:seed
bundle install
yarn install

rails s -p 3000
```
