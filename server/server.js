require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const usersController = require('./controller/users')
const visitController = require('./controller/visits')
const notificationController = require('./controller/notification')
const visitorLogController = require('./controller/visitorLog')
const pendingRequestController = require('./controller/pendingRequest')
const acceptedRequestController = require('./controller/acceptedRequest')
const declinedRequestController = require('./controller/declinedRequest')



const app = express()
const port = process.env.DB_PORT || 8000
app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/api/v1/users/:name', (req, res) => {
    usersController.searchUsersByName(req.params.name).then((data) => res.json(data))
})

app.get('/api/v1/users/:id', (req, res) => {
    usersController.getUserById(req.params.id).then((data) => res.json(data))
})

app.get('/api/v1/users', (req, res) => {
    usersController.getAllUsers().then((data) => res.json(data))
})

app.post('/api/v1/users', (req, res) => {
    usersController.createUser(req.body.users).then((data) => res.json(data))
})

app.put('/api/v1/users', (req, res) => {
    usersController.updateUser(req.body.user).then((data) => res.json(data))
})

app.delete('/api/v1/users/:id', (req, res) => {
    usersController.deleteUser(req.params.id).then((data) => res.json(data))
})

app.post('/api/v1/visits', (req, res) => {
    visitController.createVisit(req.body.visits).then((data) => res.json(data))
})

app.get('/api/visits/search', (req, res) => {
    visitController.searchVisitsByUserName().then((data) => res.json(data))
})
app.get('/api/v1/visits', (req, res) => {
    visitController.getAllVisits().then((data) => res.json(data))
})

app.put('/api/v1/visits', (req, res) => {
    visitController.updateVisit(req.body.visits).then((data) => res.json(data))
})

app.delete('/api/v1/visits/:id', (req, res) => {
    visitController.deleteUser(req.params.id).then((data) => res.json(data))
})

app.post('/api/v1/login', (req, res) => {
    usersController.userlogin(req.body).then((data) => res.json(data))
})

app.post('/api/v1/email-notification', (req, res) => {
    visitController
        .sendVisitAcceptedEmail(req.body.visits)
        .then((data) => res.json(data))
})

app.post('/api/v1/notifications', (req, res) => {
    notificationController
        .createNotification(req.body.notification)
        .then((notification) => res.json(notification))
})

app.get('/api/v1/visitor-log/:id', (req, res) => {
    visitorLogController
        .getLogById(req.params.id)
        .then((data) => res.json(data))
})

app.get('/api/v1/visitor-log', (req, res) => {
    visitorLogController.getAllLogs().then((data) => res.json(data))
})

app.put('/api/v1/visitor-log', (req, res) => {
    visitorLogController
        .updateLog(req.body.user)
        .then((data) => res.json(data))
})

app.delete('/api/v1/visitor-log/:id', (req, res) => {
    usersController.deleteLog(req.params.id).then((data) => res.json(data))
})

app.get('/api/v1/pending-request/:user_id', (req, res) => {
    pendingRequestController
        .getPendingReq(req.params.user_id)
        .then((data) => res.json(data))
})

app.get('/api/v1/decline-request/:user_id', (req, res) => {
    declinedRequestController
        .getDeclineReq(req.params.user_id)
        .then((data) => res.json(data))
})

app.get('/api/v1/accepted-request/:user_id', (req, res) => {
    acceptedRequestController
        .getAcceptedReq(req.params.user_id)
        .then((data) => res.json(data))
})


app.get('/api/v1/pending-request', (req, res) => {
    pendingRequestController
        .getAllPendingReq()
        .then((data) => res.json(data))
})

app.delete('/api/v1/pending-request/:id', (req, res) => {
    pendingRequestController
        .deletePendingReq(req.params.id)
        .then((data) => res.json(data))
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
