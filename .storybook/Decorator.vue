<template lang="pug">
  .decorator
    slot(name="story")
</template>

<script>
export default {
  name: 'Decorator'
}
</script>

<style lang="scss">
@import "~/assets/scss/style.scss";
</style>
