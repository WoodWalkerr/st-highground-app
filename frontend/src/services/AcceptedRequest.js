export const getAcceptedReq = async (userID) => {
    try {
      const response = await fetch(`/api/v1/accepted-request/${userID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  