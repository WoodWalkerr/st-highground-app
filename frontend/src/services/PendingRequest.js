export async function getAllPendingReq() {
    try {
        const response = await fetch('/api/v1/pending-request')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}

export async function getPendingReq(userId) {
    try {
        const response = await fetch(`/api/v1/pending-request/${userId}`)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function deletePendingReq(userId) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const deleteUser = await fetch(`/api/v1/pending-request/:id/${userId}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
