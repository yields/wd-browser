
clean:
	rm -fr build components template.js

node_modules: package.json
	@npm install

test: node_modules
	@node_modules/.bin/mocha \
		--reporter spec \
		--require should

.PHONY: clean test
