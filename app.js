import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 3000;

const orders = [];

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home');
});

app.post('/thankyou', (req, res) =>{

    const order = {
        name: req.body.name,
        email: req.body.email,
        flavor: req.body.flavor,
        cone: req.body.cone,
        toppings: req.body.toppings
    }

    console.log(req.body);
    res.render('thankyou', { order });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});