<template>
  <div class="col-md-4 my-4">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <img class="img-fluid imgs" :src="carProp.imgUrl" alt="">
          </div>
          <div class="col-4">
            <h5 class="card-title">
              {{ carProp.make }} {{ carProp.model }}
            </h5>
            <p>${{ carProp.price }}</p>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 text-right">
            <button class="btn btn-info" @click="toggle" data-toggle="modal" data-target="#carModal">
              Inspect
            </button>
            <button class="btn btn-outline-danger ml-2">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
export default {
  props: { carProp: { type: Object, requried: true } },
  setup(props) {
    return {
      toggle() {
        AppState.activeCar = props.carProp
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.imgs{
  height: 150px;
  width: 400px;
}
</style>
