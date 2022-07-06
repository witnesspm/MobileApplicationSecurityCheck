import { Request } from '../utils/request'
//新增博客
export function add_blog (parameter?: any)  {
    return Request.axiosInstance({
        url: '/add_blog',
        method: 'post',
        data: parameter
    })
}
export function getblog(parameter?: any) {
  return Request.axiosInstance({
    url: '/getblog',
    method: 'get',
    data: parameter
  })
}

export function getablog(parameter: any) {
  return Request.axiosInstance({
    url: '/getblog',
    method: 'post',
    data: parameter
  })
}

export function updatagexf_addnode(parameter: any) {
  return Request.axiosInstance({
    url: '/updatagexf_addnode',
    method: 'post',
    data: parameter
  })
}
