const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();  
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'jcraig13';
db_credentials.host = 'datastructures.cbnl53rr1xx3.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query meetings located NORTH of 469 W 142ND ST New York NY
var thisQuery = "SELECT address, lat, long FROM aalocations WHERE lat > 40.8232200234845;";

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});
