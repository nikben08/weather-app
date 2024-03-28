const parseResponse = (response: any) => {
    if (response && response.data) {
      return response.data;
    }
    return null;
  }

export default parseResponse;
