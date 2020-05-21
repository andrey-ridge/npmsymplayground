all:
	@echo "see makefile for options"

install_with_cache:
	cd cache && mkdir "node_modules"
	cd package && ln -s "../cache/node_modules" . && npm install

install_without_cache:
	cd package && npm install

clean:
	rm -rf package/node_modules
	rm -rf cache/node_modules

test:
	cd package && npm test
