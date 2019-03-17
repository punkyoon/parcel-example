# parcel-example

Bundling simple HTML + JS pages with `parcel-bundler`

### first-example tree

```
src/
├── index.js
└──first-example/
    ├── index.html
    └── index.js
```

### second-example tree

```
src/
├── index.js
└── second-example/
    ├── imgs/
    │   ├── munchlax.png
    │   └── snorlax.png
    │
    ├── index.html
    └── index.js
```

## Install + Build + Open

```bash
# Install packages
$ npm install

# Build for local
$ npm run build:stag
# Open local build
$ open dist/first-example/index.html
$ open dist/second-example/index.html

# Build for prod (WIP)
```

## License

Unlicense
