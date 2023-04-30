export async function getAllVisits() {
    try {
        const response = await fetch(`/api/v1/visits`)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
export async function getVisitsForUserAndDate(userId, date) {
    try {
      const visits = await getAllVisits()
      const filteredVisits = visits.filter(
        visit => visit.user_id === userId && visit.visit_date === date
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

// requests.js
export async function updateRequestStatus(requestId, status) {
    const response = await fetch(`/api/v1/visits/${requestId}`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
        headers: { 'Content-Type': 'application/json' },
    })
    return await response.json()
}
