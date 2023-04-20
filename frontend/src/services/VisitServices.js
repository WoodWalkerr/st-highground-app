
export const createrVisits = async (visits) => {
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