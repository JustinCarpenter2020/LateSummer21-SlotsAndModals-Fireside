<template>
  <div class="component">
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: { idProp: { type: String, required: true } },
  setup(props) {
    const state = reactive({
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
