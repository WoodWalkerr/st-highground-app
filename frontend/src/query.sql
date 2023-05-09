SELECT visits.*, users.name, users.*
FROM visits
INNER JOIN users ON visits.user_id = users.id;



DELETE FROM visits
WHERE purpose = 'text-xs';




WHERE "visits"."visit_date" BETWEEN '2023-06-03 07:01:00' AND '2023-06-04 07:00:59'


async createVisit(visits) {
        try {
            const visitCount = await this.db.visits.count({
                where: {
                    visit_date: visits.visit_date,
                },
            })
                const visit = await this.db.visits.create({
                user_id: visits.user_id,
                visit_date: visits.visit_date,
                visit_time: visits.visit_time,
                purpose: visits.purpose,
            })
            return visit
        } catch (error) {
            console.log('Error: ', error)
            throw error
        }
    }