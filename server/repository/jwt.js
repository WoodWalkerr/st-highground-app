
//     if (!user) {
//         return res.status(404).send('No user found.')
//     }

//     const passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//     )
//     if (!passwordIsValid) {
//         return res.status(401).send({ auth: false, token: null })
//     }

//     const token = jwt.sign({ id: user.id }, jwtSecret, {
//         expiresIn: '24h',
//     })
//     res.status(200).send({ auth: true, token: token })
// })
// .catch((err) => {
//     console.log('Error:', err)
//     return res.status(500).send('Error on the server.')
// })