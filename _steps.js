/**
 *1. create a node server with 5 steps
 *1.1 create folder
 *1.2 npm init
 *1.3 npm i express cors mongodb
 *1.4 script-dev: nodemon index.js
 *1.5 create index.js
 *1.6 use 5steps create node server
 * 
 * ..................
 * create Atlas Account
 * >>>>>>>>>>>>
 * 1. sign in google access
 * 2. create cluster
 * 3. create user userdb3 and password
 * 4. netword access --> ip address: allow all
 * 5. database > connect > code copy paste index.js
 * ----------------------
 * CRUD operation
 * ---------------------
 * 1. node mongodb CRUD > Fundamentals
 * 2. Insert a document
 * 3. create async run function
 * ---------------------
 * Integrate sending data from client to server
 * -------------------------------
 * client side: create form
 * on submit get form data and create user object
 * 3. on server: create user post to recive data on the backend
 * 4. on client side: set fetch with post, headers, body
 * 5. Make sure you return a json from the post api
 * ---------------
 * Load data to client side
 * ---------------------
 * create a get api on the server
 * create a query object 
 * collection.find(query)
 * cursor.toArray()
 * return the result
 * from client useEffect and display like you have done before
*/