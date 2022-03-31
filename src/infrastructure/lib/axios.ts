import axios, { AxiosRequestConfig } from 'axios';

const headers = {
    'Content-Type': 'application/json'
};

type AxiosDataParams = Record<string, string | number | boolean>;

const httpAxios = (baseURL: string) => {
    const http = axios.create({
        baseURL,
        headers
    });

    return {        
        get: async <T>(path: string, params?: AxiosDataParams, config?: AxiosRequestConfig) => {
            const response = await http.get<T>(path, { ...config, params });
            return response.data;
        },
        post: async <T>(path: string, data?: AxiosDataParams, config?: AxiosRequestConfig) => {
            const response = await http.post<T>(path, data, { ...config });
            return response.data;
        },
        put: async <T>(path: string, data?: AxiosDataParams, config?: AxiosRequestConfig) => {
            const response = await http.put<T>(path, data, { ...config });
            return response.data;
        },
        delete: async <T>(path: string, params?: AxiosDataParams, config?: AxiosRequestConfig) => {
            const response = await http.delete<T>(path, { ...config, params });
            return response.data;
        }
    }
};

export type HttpAxios = ReturnType<typeof httpAxios>;

export default httpAxios;