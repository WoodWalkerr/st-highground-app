export async function getUsers() {
    try {
        const response = await fetch('/api/v1/users')
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function searchUsersByName(name) {
    try {
      const response = await fetch(`/api/v1/users/${encodeURIComponent(name)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw new Error('Internal server error');
    }
  }
  

export const createUser = async (users) => {
    try {
        const response = await fetch('/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ users }),
        })
        return response.json()
    } catch (error) {
        console.error(error.message)
    }
}

export async function updateUser(userDetails) {
    const response = await fetch('/api/v1/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: userDetails }),
    })
    return await response.json()
}

export async function deleteUser(id) {
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
