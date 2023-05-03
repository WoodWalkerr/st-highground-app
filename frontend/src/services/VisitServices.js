export async function getAllVisits() {
    try {
      const response = await fetch('/api/v1/visits');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }

export async function getVisitsForUserAndDate(userId, date) {
    try {
        const visits = await getAllVisits()
        const filteredVisits = visits.filter(
            (visit) => visit.user_id === userId && visit.visit_date === date
        )
        return filteredVisits
    } catch (error) {
        console.error(error)
        return []
    }
}

export const createVisit = async (visits) => {
    try {
        const response = await fetch('/api/v1/visits', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ visits }),
        })

        const responseData = await response.json()

        console.log('Response data: ', responseData)

        return responseData
    } catch (error) {
        console.error(error.message)
    }
}

export async function deleteVisit(id) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const deleteUser = await fetch(`/api/v1/visits/${id}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
export async function updateVisitStatus(user_id, status) {
    try {
      const response = await fetch('/api/v1/visits', {
        method: 'PUT',
        body: JSON.stringify({ visits: { user_id, status } }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      return await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }
  

  

  
