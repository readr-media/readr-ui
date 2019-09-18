# @readr-ui/subscription

## Install

using yarn:

```
yarn add @readr-ui/subscription
```

## Usage

xxx.vue

```html
<template>
  <Subscription
    @submit="subscribe"
  />
</template>

<script>

import Subscription from 'src/components/Subscription.vue'

export default {
  components: {
    Subscription
  },
  methods: {
    subscribe (email) {
      // do somethig...
    }
  }
}

</script>

```
## Props Options

|key|description|default|type|
|:---|---|---|---|
| `errorMessage`|customize error message |``|`String`|
| `isError`|control whether to display error message  |`false`|`Boolean`|
| `isLoading`|control whether to display loading effect |`false`|`Boolean`|
| `isSuccess`|control whether to display success message |`false`|`Boolean`|
| `placeholder`|customize input placeholder |`我的 Email 信箱`|`String`|
| `submitText`|customize submit button text |`送出`|`String`|

## Developing

```
# For rapid prototyping a single Vue.js SFC
yarn serve packages/readr-ui-subscription/src/readr-ui-subscription.vue
```

