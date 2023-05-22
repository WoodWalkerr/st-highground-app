export async function userLogin(users) {
    console.log("eto yun", users)
    try {
        const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(users),
        })
        console.log(response)
        return await response.json()
    } catch (error) {
        console.error(error.message)
    }
}