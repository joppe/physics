SHELL := /bin/bash

PWD := $(shell pwd)

bower:
	@echo "Install bower packages"
	$(PWD)/node_modules/.bin/bower install

npm:
	@echo "Install node packages"
	npm install

typescript:
	@echo "Transpile typescript"
	$(PWD)/node_modules/.bin/tsc --project ts

typescript-watch:
	@echo "Transpile typescript (watching for changes)"
	$(PWD)/node_modules/.bin/tsc --project ts  --watch

karma:
	@echo "Run karma tests"
	$(PWD)/node_modules/.bin/karma start karma.conf.js --single-run --no-auto-watch --reporters dots

setup: npm bower typescript
