# 1. .env
# Change it if you need
PORT = 3000
JWT_SECRET = "jwt_secret"



# 2. app.js
# Create a database
# Change username, password and database to connect to MongoDB
'mongodb+srv://username:password@jwtapi.qpxeobz.mongodb.net/database?retryWrites=true&w=majority&appName=JWTAPI'



# 3. npm run start



# 4. Use Insomnia, Postman...



# 5. http://127.0.0.1:3000/registration POST Method
Enter the username, password and admin (true/false)



# 6. http://127.0.0.1:3000/login POST Method
Enter the username, password
(After you login, you get a JWT token)



# 7. Since there is no data in the first time, please create a data. (POST) (Admin User)



# 8. Admin user
Can do GET, POST, PUT and DELETE method in route /api/receipt



# 9. Normal user
Can only do GET method in route /api/receipt



# 10. /api/receipt Route List
router.get('/', getReceipts);

router.get('/:id', getReceipt);

router.post('/', jwtIsAdmin, postReceipt);

router.put('/:id', jwtIsAdmin, putReceipt);

router.delete('/:id', jwtIsAdmin, deleteReceipt);