all: examples/bundle.js

lib:
	mkdir -p lib

lib/react-pagination-boostrap3.js: lib src/react-pagination-boostrap3.js
	./node_modules/.bin/babel src -d lib

clean:
	rm -rf lib examples/bundle.js