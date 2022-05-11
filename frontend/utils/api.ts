const req = async (
  method: string,
  url: string,
  headers: object = {},
  body?: object | null,
  params?: any,
) => {
  console.log(url);
  
  if (params) {
    url += '?' + convertParams(params);
  }

  const response = await fetch(url, {
    method: method.toUpperCase(),
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      ...headers,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: body ? JSON.stringify(body) : null,
  });

  return response;
};

const api = {
  post: async (url: string, headers?: object, body?: object, params?: any) =>
    await req('post', url, headers, body, params),
  put: async (url: string, headers?: object, body?: object, params?: any) =>
    await req('put', url, headers, body, params),
  delete: async (url: string, headers?: object, body?: object, params?: any) =>
    await req('delete', url, headers, body, params),
  patch: async (url: string, headers?: object, body?: object, params?: any) =>
    await req('patch', url, headers, body, params),
  get: async (url: string, headers?: object, params?: any) =>
    await req('get', url, headers, null, params),
};

export default api;

function convertParams(params: any) {
  return Object.keys(params)
    .map((k) => {
      // if (Array.isArray(params[k])) {
      //   return params[k]
      //     .map((val) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
      //     .join('&');
      // }
      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    })
    .join('&');
}
