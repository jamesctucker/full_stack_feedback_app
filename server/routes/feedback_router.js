const express = require('express');
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'prime_feedback',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
});

// This router uses POST to transfer feedback data to the database
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1,$2,$3,$4)`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support,
    req.body.comments]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error, 'POST');
        res.sendStatus(500);
    });
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const queryText = `SELECT id, feeling, understanding, support,
    comments FROM "feedback" 
    ORDER BY id ASC
    LIMIT 100;`;
    pool.query(queryText, [id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error, 'GET');
        res.sendStatus(500);
    });
})



module.exports = router;