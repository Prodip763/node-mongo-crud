const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const port = process.env.PORT || 5000;
//use middleware
app.use(cors());
app.use(express.json());

//user: userdb3
//password: l9PJAWXnxqyAo8kO




const uri = "mongodb+srv://userdb3:l9PJAWXnxqyAo8kO@cluster0.mde3wgv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const userCollection = client.db("foodExpress").collection('users');
        // load data to the client side //get user
        app.get('/users', async(req, res)=>{
            const query = {};
            const cursor= userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        app.get('/users/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        });

        //POST User : add a new user
        app.post('/user', async(req, res)=>{
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        });

        //update user
        app.put('/users/:id', async(req, res)=>{
            const id = req.params.id;
            const updatedUser= req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            };
            const result = await userCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })

        //delete a user

        app.delete('/users/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });
    }
    finally{
        // await client.close(); 
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('running my crud server');
});

app.listen(port, () => {
    console.log('curd server is running');
})