# eslint-plugin-export-keys

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Eslint plugin to check the object keys exported by your javascript modules

## Installation

```shell
npm i @dreipol/eslint-plugin-export-keys -D
```

## Rules

### Order

Enabling the `export-keys/order` rule you will be able to specify the the order in which your object keys should be exported

For example:

```json
{
  "plugins": [
    "@dreipol/export-keys"
  ],
  "rules": {
    "export-keys/order": [1, ["template", "data", "ready"]]
  }
}
```

This rule will check that all your modules exporting some of all the keys defined inside the `keys` option will be exported in the order defined:

```js
export default {
  template: {},
  data: {},
  ready: {},
}

// or also valid
export default {
  template: {},
  ready: {},
}

// this will throw
export default {
  ready: {},
  template: {},
}
```

This rule works with `module.exports` and `exports` as well

[travis-image]:https://img.shields.io/travis/dreipol/eslint-plugin-export-keys.svg?style=flat-square
[travis-url]:https://travis-ci.org/dreipol/eslint-plugin-export-keys

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/@dreipol/eslint-plugin-export-keys.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/@dreipol/eslint-plugin-export-keys.svg?style=flat-square
[npm-url]:https://npmjs.org/package/@dreipol/eslint-plugin-export-keys


