const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet())

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('leffat.db');

app.listen(8080, () => {
    console.log('Node toimii localhost:8080');
});

app.get('/', (req, res, next) => {
    return res.json({ error: false, message: 'Toimii' })
});

app.get('/leffa/all', (req, res, next) => {
    db.all('select * from leffa', (error, result) => {
        if (error) throw error;

        return res.status(200).json(result);
    });
})

app.get('/leffa/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM leffa where id=?', [id], (error, result) =>{
        if (error) throw error;
        if (typeof(result) == 'undefined') {
            return res.status(200).send({});
        }
        return res.status(200).json(result);
    });
})

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage: storage })



app.post('/leffa/add',  upload.single('posteri'), (req, res, next) => {
    let leffa = req.body;
    let posteri = null;
    if (req.file) {
        posteri = req.file.originalname;
    }
    db.run('INSERT INTO leffa (nimi, arvosteltu, posteri, traileri, ohjaaja, vuosi, arvosana) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [leffa.nimi, leffa.arvosteltu, posteri, leffa.traileri, leffa.ohjaaja, leffa.vuosi, leffa.arvosana], (error, result, field) => {
            if (error) throw error;

            return res.status(200).json({count: 1});
        });

})

app.post('/leffa/edit/:id', upload.single('posteri'), (req, res, next) => {
    let id = req.params.id;
    let leffa = req.body;

})

app.get('/download/:nimi', (req, res, next) => {
    var file = './uploads/' + req.params.nimi;
    res.download(file);
});



app.get('/leffa/delete/:id', (req, res, next) => {
    let id = req.params.id;
    db.run('DELETE FROM leffa where id=?', [id], (error, result) =>{
        if (error) throw error;
        if (this.changes === 0) {
            return res.status(200).json({count: 0});
        }
        return res.status(200).json({count: 1});
    });

})

app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})