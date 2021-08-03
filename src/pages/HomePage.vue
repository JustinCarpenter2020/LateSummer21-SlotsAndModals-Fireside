<template>
  <div class="container-fluid">
    <div class="hero mt-4">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 hero" src="https://cdn.hiconsumption.com/wp-content/uploads/2018/09/Best-In-House-Car-Tuning-Brands-0-Hero-1087x725.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text">
                Cars
              </h2>
              <h5 class="text">
                Buy and sell from the top car providers.
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 hero" src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text">
                Houses
              </h2>
              <h5 class="text">
                Find that forever home here!
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 hero" src="https://www.sanluisobispo.com/news/fg053g/picture218225945/alternates/FREE_1140/JOBS-BG42.JPG" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text">
                Jobs
              </h2>
              <h5 class="text">
                Search the best job listings out there.
              </h5>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 text-center">
        <h2 class="mt-4 font">
          Cars
        </h2>
      </div>
    </div>
    <div class="row my-4">
      <CarComponent v-for="c in cars" :key="c.id" :car-prop="c" />
    </div>
    <!-- <div class="row">
      <div class="col-12">
        <h2>Houses</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Jobs</h2>
      </div>
    </div> -->
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { carsService } from '../services/CarsService'
import { housesService } from '../services/HousesService'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
import $ from 'jquery'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      carsService.getAll()
      housesService.getAll()
      jobsService.getAll()
      $('.carousel').carousel({
        interval: 4000
      })
    })
    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style scoped lang="scss">
.hero{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
}

.text{
   text-shadow: 2px 2px black;
}

.font{
  font-family: 'Heebo', sans-serif;
}
</style>
