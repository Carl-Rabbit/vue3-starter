import { RequestHttp } from './axios'

const request = new RequestHttp({
  timeout: 60000,
})

export class TestService {
  static async fetchText(text: string): Promise<string> {
    return request.get('/api/test/text', {text})
  }

  static async increaseRemote() {
    return request.post<number>('/api/test/increaseRemote', {})
  }

  static async triggerError(errorCode: number): Promise<string> {
    return request.get('/api/test/triggerError', {errorCode})
  }
}

export class TaoService {
  static async getCaseList(): Promise<string[]> {
    return request.get(`/api/case/list`, {})
  }
}