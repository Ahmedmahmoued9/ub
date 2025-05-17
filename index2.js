const { MongoClient} = require('mongodb');
const url = "mongodb+srv://mohamedzggmk:Killer123344@cluster0.su5mklo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);
  
  async function main() {
    
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db("os");
      
      const collection = db.collection("products");
      
      const data = await collection.find().toArray();
      
      console.log(data);
      
    }
  

    main().catch(console.error);
