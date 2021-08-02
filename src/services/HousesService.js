import { AppState } from '../AppState'
import { GApi } from './AxiosService'

class HousesService {
  async getAll() {
    const res = await GApi.get('houses')
    AppState.houses = res.data
  }
}

export const housesService = new HousesService()
