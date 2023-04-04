const express = require('express');
const routes = express.Router();

routes.get('/cuota', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('SELECT * FROM cuotass', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
            });
    });
});

routes.get('/reporteCuotas/:id_cooperativa', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('SELECT * FROM cuotass WHERE id_cooperativa = ?', [req.params.id_cooperativa], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
            });
    });
});

routes.post('/cuota', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('INSERT INTO cuotass set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});

routes.delete('/cuota/:id_registro', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('DELETE FROM cuotass WHERE id_registro = ?', [req.params.id_registro], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});

routes.put('/cuota/:id_registro', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('UPDATE cuotass set ? WHERE id_registro = ?', [req.body, req.params.id_registro], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});

//******/

routes.get('/coop', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('SELECT * FROM cooperativa', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
            });
    });
});

routes.post('/coop', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('INSERT INTO cooperativa set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});


routes.delete('/coop/:id_cooperativa', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('DELETE FROM cooperativa WHERE id_cooperativa= ?', [req.params.id_cooperativa], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});


routes.put('/coop/:id_cooperativa', (req, res) => {
    
    req.getConnection( (err,conn) => {
        if (err) return res.send(err)
        
        conn.query('UPDATE cooperativa set ? WHERE id_cooperativa = ?', [req.body, req.params.id_cooperativa], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        });
    });
});



module.exports = routes;