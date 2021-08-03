import { AppState } from '../AppState'
import { GApi } from './AxiosService'

class CarsService {
  async getAll() {
    const res = await GApi.get('cars')
    console.log(res.data)
    AppState.cars = res.data
  }

  async create(car) {
    const res = await GApi.post('cars', car)
    AppState.cars.push(res.data)
  }
}

export const carsService = new CarsService()
