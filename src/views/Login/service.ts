import request from '@/utils/request';

interface LoginForm {
  [key: string]: string;
}

export function loginByUsername(query: LoginForm) {
  const data: LoginForm = {
    username: query.username,
    password: query.password,
    // eslint-disable-next-line @typescript-eslint/camelcase
    grant_type: 'password',
  };
  console.log(data);
  return request({
    url: '/api/auth/oauth/token',
    method: 'post',
    data,
    transformRequest: [() => {
      // Do whatever you want to transform the data
      let ret = '';
      const keys = Object.keys(data);
      keys.forEach((key) => {
        ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
      });
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic dnVlOnZ1ZQ==',
    },
  });
}

export function post(query: object) {
  return request({
    url: '/api/agent/agents/page',
    method: 'get',
    params: query,
  });
}
