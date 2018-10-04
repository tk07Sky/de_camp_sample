<template lang="pug">
  button.button-red.color-red {{ label }}
</template>

<script>
export default {
  props: {
    label: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.button-red {
  border: solid 1px red;
  padding: 5px 15px;
  background-color: white;
  border-radius: 10px;
}
</style>
