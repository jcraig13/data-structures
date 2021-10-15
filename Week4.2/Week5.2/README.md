## Week 5.2

### Connecting to AWS DynamoDB
In this assignment, I created an AWS DynamoDB to host my noSQL database. The "table" is called processblog and it has a primary key called "id". This is a index of each entry I create.

Connecting to the database with this block of starter code:
```
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();
```

### Adding entries to process blog

This is the class I used to create the array of data being pushed to the database
```
class BlogEntry {
  constructor(primaryKey, date, peopleISaw, mood, activities, food, colorOfShirt, weather) {
    this.id = {};
    this.id.N = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.peopleISaw = {};
    this.peopleISaw.SS = peopleISaw;
    this.mood = {};
    this.mood.S = mood; 
    if (activities != null) {
      this.activities = {};
      this.activities.SS = activities; 
    }
    if (food != null) {
      this.food = {};
      this.food.SS = food; 
    }
    this.colorOfShirt = {};
    this.colorOfShirt.SS = colorOfShirt;
    this.weather = {}
    this.weather.S = weather;
  }
}
```

This constructs a row of a primary key, a date, people I saw, mood, activities, food, color of shirt, and the weather
This block is used to assign those variables to a data type. Then they were pushing into an array called "blogEntries"

Then, using async, I added each entry to the database with this block of code:
```
//asynchronously push the blogentries to the db
async.eachSeries(blogEntries, function(value, callback) {
    //set params to send to db
    var params = {};
    params.Item = value; 
    params.TableName = "processblog";
    
    //pushes to db
    dynamodb.putItem(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    setTimeout(callback, 1000); 
}); 
```
