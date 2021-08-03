<template>
  <div class="component">
    <div class="modal fade"
         :id="idProp"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <slot name="header">
                My Modal
              </slot>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="create()">
              <slot name="forms">
                ...
              </slot>
              <button type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import { jobsService } from '../services/JobsService'
import { housesService } from '../services/HousesService'
export default {
  props: { idProp: { type: String, required: true } },
  setup(props) {
    const state = reactive({
      newPost: computed(() => AppState.newPost)
    })
    return {
      state,
      async create() {
        props.idProp === 'car' ? carsService.create(state.newPost) : props.idProp === 'job' ? jobsService.create(state.newPost) : housesService.create(state.newPost)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
