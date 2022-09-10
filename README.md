
## About

Ticketpe is a lightweight resale ticket system C2C build on top of nestjs and react,
this is the backend application.

## Installation

This project can be installed following the normal procedure that is written on nestjs, just use NODE 16
to avoid issues.

Also this project relies on docker, so is recommended to use it. In order to use docker follow the next steps.

```bash
$ npm install
```

## Environment Setup

Please configure your .env from the .env.example file, all fields must be filled according
to your needs

## Docker Installation

You need to have docker version 19, and docker compose installed.

```bash
# verbose mode, this will do the build for you
$ docker compose up

# silent mode
$ docker compose up -d

# in order to build again, if changed Dockerfile
$ docker compose build --no-cache
```

## Daily Usage

```bash
# to install a new package
$ docker compose run nestjs npm install <package>

# unit tests
$ docker compose run nestjs npm run test

# e2e tests
$ docker compose run nestjs npm run test:e2e

# test coverage
$ docker compose run nestjs npm run test:cov
```


## Running the app

```bash
# under the hood, docker executed this command
$ npm run start:debug
```
