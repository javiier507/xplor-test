current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

## docker

docker-build:
	docker build -t xplor-demo:v1.0.0 .

docker-run:
	docker-compose up

docker-down:
	docker-compose down

## npm

run-dev:
	npm run dev

run-build:
	npm run build

run-prod:
	npm start