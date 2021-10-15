//PART B CODE - ADDS DATA INTO THE TABLE
const { Client } = require('pg');
var async = require('async');  
const dotenv = require('dotenv');
dotenv.config();  

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'jcraig13';
db_credentials.host = 'datastructures.cbnl53rr1xx3.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

//array of address, lat and long data to insert into table
var addressesForDb = [
  {
      "address":"109 W 129TH ST New York NY ",
      "latlong":{
         "lat":"40.8105033439451",
         "lng":"-73.9438349756133"
      }
  },
  {
      "address":"240 W 145TH ST New York NY ",
      "latlong":{
         "lat":"40.8220449603096",
         "lng":"-73.9402738669626"
      }
  },
  {
      "address":"469 W 142ND ST New York NY ",
      "latlong":{
         "lat":"40.8232200234845",
         "lng":"-73.9485449135295"
      }
  },
  {
      "address":"204 W 134TH ST New York NY ",
      "latlong":{
         "lat":"40.8146053686072",
         "lng":"-73.9443570754889"
      }
  },
  {
      "address":"2044 ADAM CLAYTON POWELL BLVD New York NY ",
      "latlong":{
         "lat":"40.8072665297278",
         "lng":"-73.9499061022154"
      }
  },
  {
      "address":"469 W 142ND ST New York NY ",
      "latlong":{
         "lat":"40.8232200234845",
         "lng":"-73.9485449135295"
      }
  },
  {
      "address":"521 W 126TH ST New York NY ",
      "latlong":{
         "lat":"40.8144929933342",
         "lng":"-73.9558896362264"
      }
  },
  {
      "address":"109 W 129TH ST New York NY ",
      "latlong":{
         "lat":"40.8105033439451",
         "lng":"-73.9438349756133"
      }
  },
  {
      "address":"469 W 142ND ST New York NY ",
      "latlong":{
         "lat":"40.8232200234845",
         "lng":"-73.9485449135295"
      }
  },
  {
      "address":"2044 SEVENTH AVE New York NY ",
      "latlong":{
         "lat":"40.8071759186691",
         "lng":"-73.9497519327616"
      }
  },
  {
      "address":"127 W 127TH ST New York NY ",
      "latlong":{
         "lat":"40.8094766772235",
         "lng":"-73.9452613355488"
      }
  },
  {
      "address":"310 W 139TH ST New York NY ",
      "latlong":{
         "lat":"40.8190256453939",
         "lng":"-73.9448681362397"
      }
  },
  {
      "address":"409 W 141ST ST New York NY ",
      "latlong":{
         "lat":"40.8215326572652",
         "lng":"-73.9464830279892"
      }
  },
  {
      "address":"91 CLAREMONT AVE New York NY ",
      "latlong":{
         "lat":"40.8119642222478",
         "lng":"-73.9625130600971"
      }
  },
  {
      "address":"1727 AMSTERDAM AVE New York NY ",
      "latlong":{
         "lat":"40.8255371320577",
         "lng":"-73.9471630832303"
      }
  },
  {
      "address":"469 W 142ND ST New York NY ",
      "latlong":{
         "lat":"40.8232200234845",
         "lng":"-73.9485449135295"
      }
  },
  {
      "address":"91 CLAREMONT AVE New York NY ",
      "latlong":{
         "lat":"40.812",
         "lng":"-73.9625"
      }
  },
  {
      "address":"219 W 132ND ST New York NY ",
      "latlong":{
         "lat":"40.8136938017217",
         "lng":"-73.9455988432903"
      }
  },
  {
      "address":"211 W 129TH ST New York NY ",
      "latlong":{
         "lat":"40.811646918986",
         "lng":"-73.9465692736586"
      }
  },
  {
      "address":"425 W 144TH ST New York NY ",
      "latlong":{
         "lat":"40.8238859925299",
         "lng":"-73.9462723904462"
      }
  },
  {
      "address":"204 W 134TH ST New York NY ",
      "latlong":{
         "lat":"40.8146053686072",
         "lng":"-73.9443570754889"
      }
  },
  {
      "address":"506 LENOX AVE New York NY ",
      "latlong":{
         "lat":"40.8143",
         "lng":"-73.9403"
      }
  },
  {
      "address":"1727 AMSTERDAM AVE New York NY ",
      "latlong":{
         "lat":"40.8255371320577",
         "lng":"-73.9471630832303"
      }
  },
  {
      "address":"1854 AMSTERDAM AVE New York NY ",
      "latlong":{
         "lat":"40.8295984557205",
         "lng":"-73.9446555334471"
      }
  },
  {
      "address":"469 W 142ND ST New York NY ",
      "latlong":{
         "lat":"40.8232200234845",
         "lng":"-73.9485449135295"
      }
  },
  {
      "address":"5866 W 135TH ST New York NY ",
      "latlong":{
         "lat":"40.6639307188879",
         "lng":"-73.9382749875207"
      }
  }
];

//asynchronously insert the addressForDb array into the table
async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latlong.lat + ", " + value.latlong.lng + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 