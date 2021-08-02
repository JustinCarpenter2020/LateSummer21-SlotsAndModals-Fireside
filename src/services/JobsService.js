import { AppState } from '../AppState'
import { GApi } from './AxiosService'

class JobsService {
  async getAll() {
    const res = await GApi.get('jobs')
    console.log(res.data)
    AppState.jobs = res.data
  }
}

export const jobsService = new JobsService()
