import { request } from '../utils/request';

export function login(params) {
  return request({
    url: '/api/v1/login',
    data: params,
    method: 'post'
  })
}

export function logout(params) {
  return request({
    url: '/api/v1/logout',
    params: params,
  })
}

export function getUsers(params) {
  return request({
    url: '/api/v1/findUserByPage',
    data: params,
    method: 'post'
  })
}