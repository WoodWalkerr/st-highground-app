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

export const createVisit = async (visits) => {
    try {
        const response = await fetch('/api/v1/visits', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ visits }),
        })
        return response.json()
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
            const deleteUser = await fetch(`/api/v1/users/${id}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}