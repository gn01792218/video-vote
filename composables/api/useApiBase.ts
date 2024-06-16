export default () => {
  async function fetchApiBase(url:string, method:'post' | 'get' | 'delete' | 'patch' | 'put',body?: any): Promise<any> {
    const { data, error } = await useFetch(url, {
      // baseURL:apiBaseUrl,
      method,
      body:JSON.stringify(body)
    });
    console.log('打API', method,url)
    if (error.value) {
      throw createError({ ...error.value, message:error.value.message });
    }
    return data.value as unknown as any;
  }
 
  return {
    //data
    //methods
    fetchApiBase
  };
};
