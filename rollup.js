const rollup = require("rollup");
const url = require("rollup-plugin-url");

// const writeoptions = {dest: "output/output.js"}
const writeoptions = { format: 'iife', dir: 'output' };
const plugin = url({
  limit: 0, // inline files < 10k, copy files > 10k
  include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
  emitFiles: true, // defaults to true
  publicPath: '/common/files/images/'
})

rollup.rollup({
  input: "src/main.js",
  plugins: [plugin],
})
.then(bundle => bundle.write(writeoptions))