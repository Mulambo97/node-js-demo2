import path from 'path';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const user = process.env.USER;
const password = process.env.PASSWORD;
const cluster_uri = process.env.CLUSTER_URI;

console.log('User:', user);
console.log('Password:', password);
console.log('Cluster URI:', cluster_uri);

const url = `mongodb+srv://${user}:${password}@${cluster_uri}.rshysdh.mongodb.net/?retryWrites=true&w=majority&appName=nodejsdemo`;
console.log(url);

const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

const __dirname = path.resolve();

// Show html page
export const home = (req, res) => {
    res.sendFile(__dirname + "/source/pages/home.html");
};

// Get and show today's date
export const getTodayDate = (req, res) => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = day + "/" + month + "/" + year;
    res.json({ today: newdate });
};

// Get list of month names
export const getMonthsName = (req, res) => {
    res.json({
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    });
};

// Get list of people
export const getPeople = (req, res) => {
    res.json([
        {
            FirstName: 'Yann',
            LastName: 'Mulonda',
            title: 'Software Engineer',
            LinkedIn: 'https://www.linkedin.com/in/yannmjl/'
        },
        {
            FirstName: 'Michael',
            LastName: 'Neis',
            title: 'Software Developer',
            LinkedIn: 'https://www.linkedin.com/in/bernard-ngandu/'
        },
        {
            FirstName: 'Odon',
            LastName: 'Mulambo',
            title: 'Software Developer',
            LinkedIn: 'https://www.linkedin.com/in/clerc-ngonga-b1253b174/'
        },
        {
            FirstName: 'David',
            LastName: 'Braun',
            title: 'Full Stack Developer',
            LinkedIn: 'https://www.linkedin.com/in/gloire-kafwalubi-3152871a0/'
        }
    ]);
};

// Get list of people from the database
export const getPeopleFromDatabase = async (req, res) => {
    const dbName = "nodejsdemo";
    const collectionName = "people";
    let peopleResults;
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        try {
            const peopleCursor = await collection.find();
            peopleResults = await peopleCursor.toArray();
        } catch (err) {
            console.error(`Something went wrong trying to fetch the documents: ${err}`);
        }
    } catch (err) {
        console.error(`Something went wrong connecting to the server: ${err}`);
    } finally {
        await client.close();
    }
    console.log(peopleResults);
    return res.json(peopleResults);
};

export const createPerson = async (req, res) => {
    const dbName = "nodejsdemo";
    const collectionName = "people";
    let addedPerson;
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        try {
            const newPerson = {
                FirstName: "Mitch",
                LastName: "McKenzie",
                Title: "Data Analyst"
            };
            const result = await collection.insertOne(newPerson);
            console.log(`New listing created with the following id: ${result.insertedId}`);
        } catch (err) {
            console.error(`Something went wrong trying to insert the new document: ${err}`);
        }
    } catch (err) {
        console.error(`Something went wrong connecting to the server: ${err}`);
    } finally {
        await client.close();
    }
    return res.json(addedPerson);
};

export const updatePerson = async (req, res) => {
    const dbName = "nodejsdemo";
    const collectionName = "people";
    let updatedPerson;
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        try {
            updatedPerson = await collection.updateOne(
                { FirstName: "Michael" },
                { $set: { Title: "Software Developer", Employed: false } }
            );
            console.log(`${updatedPerson.matchedCount} document(s) matched the query criteria.`);
            console.log(`${updatedPerson.modifiedCount} document(s) updated.`);
        } catch (err) {
            console.error(`Something went wrong trying to update the document: ${err}`);
        }
    } catch (err) {
        console.error(`Something went wrong connecting to the server: ${err}`);
    } finally {
        await client.close();
    }
    return res.json(updatedPerson);
};