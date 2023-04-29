SELECT visits.*, users.name, users.*
FROM visits
INNER JOIN users ON visits.user_id = users.id;



DELETE FROM visits
WHERE purpose = 'Camping';




WHERE "visits"."visit_date" BETWEEN '2023-06-03 07:01:00' AND '2023-06-04 07:00:59'
