<template lang="pug">
  button.button-red.color-red
    slot
</template>

<script>
export default {
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
