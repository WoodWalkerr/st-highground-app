SELECT visits.*, users.name, users.*
FROM visits
INNER JOIN users ON visits.user_id = users.id;



DELETE FROM visits
WHERE purpose = 'Trekking';
