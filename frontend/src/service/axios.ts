import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {ElMessage} from 'element-plus'
import { status2message } from '@/service/status'

interface ResultData<T = any> {
  code: number
  msg: string
  data?: T
}

export class RequestHttp {
  private service: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // custom config
        return config
      }
    )

    this.service.interceptors.response.use(
      (response: AxiosResponse<any, ResultData>) => {
        const {data} = response
        if (data.code !== 0) {
          // a response with an abnormal code (business generated)
          ElMessage.error(data.msg)
          return
        }
        return data.data
      },
      (error: AxiosError) => {
        const {response} = error
        if (response) {
          // a response with an abnormal code (system generated)
          ElMessage.error(status2message(response.status))
        } else {
          ElMessage.error('Request failed, please check your network connection')
        }
      }
    )
  }

  get<T>(url: string, params?: object): Promise<T> {
    return this.service.get(url, {params})
  }
  post<T>(url: string, params?: object): Promise<T> {
    return this.service.post(url, params)
  }
  put<T>(url: string, params?: object): Promise<T> {
    return this.service.put(url, params)
  }
  delete<T>(url: string, params?: object): Promise<T> {
    return this.service.delete(url, {params})
  }
}