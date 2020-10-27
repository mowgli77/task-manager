const express = require('express')
const { check, validationResult } = require('express-validator')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./toDoBase.sqlite3')
const router = express.Router()


router.get('/todos', (req, res) => {
    db.all(`SELECT * FROM todos LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/namesabc', (req, res) => {
    db.all(`SELECT * FROM todos ORDER BY name COLLATE NOCASE LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/nameszyx', (req, res) => {
    db.all(`SELECT * FROM todos ORDER BY name COLLATE NOCASE DESC LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/emailabc', (req, res) => {
    db.all(`SELECT * FROM todos ORDER BY email COLLATE NOCASE LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/emailzyx', (req, res) => {
    db.all(`SELECT * FROM todos ORDER BY email COLLATE NOCASE DESC LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/todosabc', (req, res) => {
    db.all(`SELECT * FROM todos ORDER BY todo COLLATE NOCASE LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/todoszyx', (req, res) => {
    db.all(`SELECT * FROM todos ORDER BY todo COLLATE NOCASE DESC LIMIT ? OFFSET ?`, [req.query.count, req.query.count * req.query.page], (err, results) => {
        res.send(results)
    })
})
router.get('/count', (req, res) => {
    db.get(`SELECT COUNT(*) AS q FROM todos`, (err, results) => {
        res.send(results)
    })
})
router.post('/addtodo',
    [
        check('name', 'Min length of password is 6 symbols').isLength({ max: 20 }),
        check('email', 'Min length of password is 6 symbols').isEmail(),
        check('todo', 'Min length of password is 6 symbols').isLength({ max: 100 })
    ],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            })
        }

    db.run(`INSERT INTO todos VALUES (?, ?, ?, ?, ?, ?)`,
            [req.body.id,
            req.body.name,
            req.body.email,
            req.body.todo,
            req.body.status,
            req.body.changed],
        (err, results) => {
            res.send('New ToDo was successfully added!')
        })
})
router.delete('/delete/:id', (req, res) => {
    db.run(`DELETE FROM todos WHERE id = ?`, [req.params.id], (err, results) => {
        res.send('ToDo was successfully deleted!')
    })
})
router.post('/createauth',
    [
        check('name', 'Min length of password is 6 symbols').isLength({ max: 20 }),
        check('email', 'Min length of password is 6 symbols').isEmail()
    ],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            })
        }

    db.run(`INSERT INTO auth VALUES (?, ?, ?)`, [
        req.body.id,
        req.body.name,
        req.body.email
    ], (err, results) => {
        res.send('Autorisation success!')
    })
})
router.post('/auth',  (req, res) => {
    db.get(`SELECT * FROM auth WHERE login LIKE ? AND password LIKE ?`, [req.body.login, req.body.password], (err, results) => {
        res.send(results)
    })
})
router.get('/getauth/:id', (req, res) => {
        db.get(`SELECT auth FROM auth WHERE id = ?`, [req.params.id], (err, results) => {
            res.send(results)
        })
})
router.post('/authstatus',  (req, res) => {
    db.run(`UPDATE auth SET auth = ? WHERE id = ?`, [req.body.auth, req.body.id], (err, results) => {
        res.send('Success')
    })
})
router.post('/updatestatus',  (req, res) => {
    db.run(`UPDATE todos SET status = ? WHERE id = ?`, [req.body.status, req.body.id], (err, results) => {
        res.send('Success')
    })
})
router.post('/changed',
    [
        check('todo', 'Min length of password is 6 symbols').isLength({ max: 100 })
    ],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            })
        }

    db.run(`UPDATE todos SET todo = ?, changed = ? WHERE id = ?`,
        [req.body.todo, req.body.changed, req.body.id],
        (err, results) => {
            res.send('Success')
        })
})

module.exports = router