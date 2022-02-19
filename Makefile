install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-prime:
	node bin/brain-prime.js
brain-progression:
	node bin/brain-progression.js
brain-gcd:
	node bin/brain-gcd.js