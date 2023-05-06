export async function getAllPendingReq() {
    try {
        const response = await fetch('/api/v1/pending-request')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}
export const getPendingReq = async (userID) => {
    try {
      const response = await fetch(`/api/v1/pending-request/${userID}`, {
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
  
  


export async function deletePendingReq(userId) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const deleteUser = await fetch(`/api/v1/pending-request/${userId}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
