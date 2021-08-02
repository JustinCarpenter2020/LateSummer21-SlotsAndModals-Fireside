import { AppState } from '../AppState'
import { GApi } from './AxiosService'

class CarsService {
  async getAll() {
    const res = await GApi.get('cars')
    console.log(res.data)
    AppState.cars = res.data
  }
}

export const carsService = new CarsService()
