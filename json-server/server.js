const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const db = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'db.json'), 'UTF-8')
);
const { users } = db;

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

    next();
});

server.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return res.status(401).send({
            message: 'Email or password is incorrect'
        });
    }

    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;

    return res.status(200).json(userWithoutPassword);
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({
            message: 'You are not authenticated'
        });
    }

    next();
});

server.use(router);

server.listen(8000, () => {
    console.log('JSON Server is running: http://localhost:8000');
});
