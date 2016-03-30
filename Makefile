SHELL := /bin/bash

PWD := $(shell pwd)

bower:
	@echo "Install bower packages"
	$(PWD)/node_modules/bower/bin/bower install

npm:
	@echo "Install node packages"
	npm install

babel:
	@echo "Transpile javascript"
	$(PWD)/node_modules/babel-cli/bin/babel.js src --out-dir dist --modules system

babel-watch:
	@echo "Transpile javascript"
	$(PWD)/node_modules/babel-cli/bin/babel.js src --out-dir dist --modules system --watch

setup: npm babel bower
