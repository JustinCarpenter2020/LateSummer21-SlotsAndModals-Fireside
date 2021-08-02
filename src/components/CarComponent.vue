<template>
  <div class="col-4">
    <div class="card">
      <img class="card-img-top" :src="carProp.imgUrl" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ carProp.make }} | {{ carProp.model }}
        </h4>
        <p class="card-text">
          Text
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { carProp: { type: Object, requried: true } },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
