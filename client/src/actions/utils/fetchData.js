const fetchData = async (
    { url, method = 'POST', body = null }
  ) => {
    
    const headers = { 'Content-Type': 'application/json' };
    body = body ? { body: JSON.stringify(body) } : {};
    try {
      const response = await fetch(url, { method, headers, ...body });
      const data = await response.json();
      if (!data.success) {
        console.log("data.message",data.message);
        throw new Error(data.message);
      }
      console.log("data.result",data.result);
      return data.result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  export default fetchData;