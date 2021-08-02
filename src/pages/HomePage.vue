<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2>Cars</h2>
      </div>
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
import { onMounted } from 'vue'
import { carsService } from '../services/CarsService'
import { housesService } from '../services/HousesService'
import { jobsService } from '../services/JobsService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      carsService.getAll()
      housesService.getAll()
      jobsService.getAll()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">
</style>
