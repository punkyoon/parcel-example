// Load modules
const ParcelBundler = require('parcel-bundler');
const Path = require('path');

// Set ntrypoints
const entryFiles = [
    Path.join(__dirname, './src/first-example/index.html'),
    Path.join(__dirname, './src/second-example/index.html')
];

// Bundler options
const options = {
    outDir: process.env.NODE_ENV === 'production' ? './build' : './dist',
    outFile: 'index.html',
    publicUrl: '../',
    watch: false,
    cache: false,
    contentHash: true,
    minify: process.env.NODE_ENV === 'production' ? true : false,
    target: 'browser',
    bundleNodeModules: false,
    logLevel: 4,
    sourceMaps: process.env.NODE_ENV === 'production' ? false : true,
    detailedReport: true
};

// Start to bundle
(async function() {
    const parcelBundler = new ParcelBundler(entryFiles, options)
    parcelBundler.bundle().then(result => console.log(result));
})();
