import * as core from '@actions/core';
import { run } from './run.js';

// Node 21+ exposes a read-only `globalThis.navigator`; assigning to it throws.
// Only polyfill on older runtimes that lack it (Node 20 and below).
if (typeof globalThis.navigator === 'undefined') {
  (global as any).navigator = {
    userAgent: 'node.js',
  };
}

run().catch(e => {
  core.setFailed(e.message || e);
});
