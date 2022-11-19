const { Router } = require('express');
const { createUser, getUserConversations, getAllUser } = require('../Controllers/users.controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.get('/users/:id', getUserConversations);

router.get('/users', authenticate, getAllUser);

router.post('/users/', createUser);

module.exports = router;