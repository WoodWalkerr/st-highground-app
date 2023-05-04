export async function getAllLogs() {
    try {
        const response = await fetch('/api/v1/visitor-log')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error.message)
    }
}

export async function getLogsById(userId) {
    try {
        const response = await fetch(`/api/v1/visitor-log/${userId}`)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function deleteLogs(userId) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const deleteUser = await fetch(`/api/v1/visitor-log/${userId}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
