# process updated chunks Webpack plugin
Webpack plugin to perform a task on updated chunks

When you are watching your code with Webpack, and do some post-processing on the output chunks that have changed, add this plugin to your webpack config.

```npm i process-updated-chunks -D```

##### webpack.config.js

```
const ProcessUpdatedChunksPlugin = require('process-updated-chunks');
 
module.exports = {
  plugins: [
    new ProcessUpdatedChunksPlugin(chunk => {
        // process.stdout.write(chunk.name);
    })
  ]
}
```
