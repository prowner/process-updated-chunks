
class ProcessChangedChunksPlugin {
    constructor(processChunkCb) {
        this.processChunkCb = processChunkCb;
        this.chunkVersions = {};
    }
    apply(compiler) {
        // Called after emitting assets to output directory
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
            // Check which chunks (brands) have changed
            const changedChunks = compilation.chunks.filter(chunk => {
                const oldVersion = this.chunkVersions[chunk.name];
                this.chunkVersions[chunk.name] = chunk.hash;
                return chunk.hash !== oldVersion;
            });
            // Invoke callback on each chunk that has changed
            changedChunks.forEach(this.processChunkCb);
        });
    }
}

module.exports = ProcessChangedChunksPlugin;
