import express from 'express';
import routes from './source/routes/routes.js';
import cors from 'cors';


// variable
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

// Enable CORS for all routes
app.use(cors());

//body parses
//create Javascrip array from req parses
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Application routes
// connect our application to Express app

routes(app);

app.listen(PORT, function(){
    console.log(`Server running on http://${PORT}`);
});
