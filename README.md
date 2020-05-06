This repository was created to demonstrate

Steps to demonstrate bug
========================

1. Clear cache and built files

```bash
$ rm -r dist .cache
```

2. Run build without TypeScript configuration

```bash
$ mv tsconfig.json phony.json # so it won't be picked up
$ parcel build index.html
✨  Built in 2.44s.

dist/ts-entry.82db203d.js           2 KB    1.72s
dist/ts-entry.82db203d.js.map    1.16 KB     10ms
dist/index.html                    173 B    590ms
$ # no code splitting was applied! we should see ts-module and js-module built separately
```

3. Attempt rebulid with TypeScript configuration

```bash
$ mv phony.json tsconfig.json
$ parcel build index.html
✨  Built in 667ms.

dist/ts-entry.82db203d.js           2 KB    552ms
dist/ts-entry.82db203d.js.map    1.16 KB      4ms
dist/index.html                    173 B      7ms
$ # code splitting still doesn't work!
```

4. Clear Parcel cache and build again

```bash
$ rm -r .cache
$ parcel build index.html
✨  Built in 1.25s.

dist/ts-entry.ca9832f6.js.map     6.55 KB      4ms
dist/ts-entry.ca9832f6.js         3.53 KB    1.01s
dist/js-module.b98feb09.js        1.25 KB     69ms
dist/ts-module.08de2615.js        1.25 KB     74ms
dist/js-module.b98feb09.js.map      309 B      5ms
dist/ts-module.08de2615.js.map      298 B      5ms
dist/index.html                     173 B    237ms
$ # now code splitting works!
```
