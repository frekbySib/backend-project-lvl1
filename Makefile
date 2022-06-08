install:
	npm ci

make lint:
	npx eslint . --fix

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js