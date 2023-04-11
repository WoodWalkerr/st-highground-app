export async function getUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/v1/users')
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export const createUser = async (user) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user }),
        })
        return response.json()
    } catch (error) {
        console.error(error.message)
    }
}

export const updateUser = async (id, data) => {
    try {
        const response = await fetch(
            `http://localhost:8080/api/v1/users/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
        )
        return response
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function deleteUser(id) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const deleteUser = await fetch(
                `http://localhost:8080/api/v1/users/${id}`,
                { method: 'DELETE' }
            )
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
