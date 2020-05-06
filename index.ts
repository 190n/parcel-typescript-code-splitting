console.log('index.ts is running!');

import('./module').then(({ default: getValue }) => {
    console.log(`module returns: ${getValue()}`);
});
