const BASE_URL = 'http://192.168.3.19:8083';

// 检查 HTTP 响应状态
const checkStatus = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
  }
  return response;
};

// 封装 fetch 请求
const fetchApi = async (url, method = 'GET', headers = {}, body = null) => {
  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...headers,
    };

    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : null,
    });

    checkStatus(response);

    // 处理可能为空的响应
    const text = await response.text();
    return text ? JSON.parse(text) : {}; // 确保解析非空 JSON
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Failed to parse response as JSON');
    } else if (error.message.startsWith('HTTP Error')) {
      throw error; // 服务器 HTTP 错误
    } else {
      throw new Error('Network error or invalid response');
    }
  }
};

// 简化导出
export default {
  get: (url) => fetchApi(url, 'GET'),
  post: (url, body) => fetchApi(url, 'POST', {}, body),
  put: (url, body) => fetchApi(url, 'PUT', {}, body),
  delete: (url) => fetchApi(url, 'DELETE'),
};
