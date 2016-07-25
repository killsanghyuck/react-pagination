all: examples/bundle.js

lib:
	mkdir -p lib

lib/react-pagination-bootstrap3.js: lib src/react-pagination-bootstrap3.js

examples/bundle.js: lib/react-pagination-bootstrap3.js examples/demo.js

clean:
	rm -rf lib examples/bundle.js