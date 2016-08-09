# eslint-plugin-export-keys

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
    "export-keys/order"
  ],
  "rules": {
    "export-keys/order": [1, { "keys": ["template", "data", "ready"] }]
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


