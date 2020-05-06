console.log('js-entry.js is running!');

import('./js-module').then(({ default: getValue }) => {
    console.log(`js module returns: ${getValue()}`);
});

import('./ts-module').then(({ default: getValue }) => {
    console.log(`ts module returns: ${getValue()}`);
});
