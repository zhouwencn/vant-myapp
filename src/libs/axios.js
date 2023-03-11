import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

export default {
  get(url, params = {}) {
    return service({
      url,
      method: "get",
      params,
    });
  },

  post(url, data = {}) {
    return service({
      url,
      method: "post",
      data,
    });
  },

  upload(url, file, data = {}) {
    const formData = new FormData();
    formData.append("file", file);
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return service({
      url,
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  download(url, params = {}) {
    return service({
      url,
      method: "get",
      params,
      responseType: "blob",
    }).then((res) => {
      const contentDisposition = res.headers["content-disposition"];
      const fileName = decodeURI(
        contentDisposition
          .split(";")[1]
          .trim()
          .split("=")[1]
          .replace(/"/g, "")
      );
      const blob = new Blob([res.data]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
  },
};
