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
    outDir: './dist',
    outFile: 'index.html',
    publicUrl: '../',
    watch: false,
    cache: false,
    contentHash: true,
    minify: true,
    target: 'browser',
    bundleNodeModules: false,
    logLevel: 4,
    sourceMaps: false,
    detailedReport: true
};

// Start to bundle
(async function() {
    const parcelBundler = new ParcelBundler(entryFiles, options)
    parcelBundler.bundle().then(result => console.log(result));
})();
