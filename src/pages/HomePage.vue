<template>
  <div class="container-fluid">
    <h2>Cars</h2>
    <div class="row my-4 scroll">
      <CarComponent v-for="c in cars" :key="c.id" :car-prop="c" />
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Houses</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Jobs</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { carsService } from '../services/CarsService'
import { housesService } from '../services/HousesService'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      carsService.getAll()
      housesService.getAll()
      jobsService.getAll()
    })
    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style scoped lang="scss">
.scroll{
  overflow-x: scroll;
  white-space: nowrap;
  height: 400px;
}
</style>
