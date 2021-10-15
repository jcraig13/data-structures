//require async
var async = require('async'); 

//array variable to hold the db entries
var blogEntries = [];

//class to set the db entry types
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

//blog entries to push to the db
//order: ID, date, peopleIsaw, mood, activities, foodIate, colorOfShit, weather
blogEntries.push(new BlogEntry(0, 'September 15, 2021', ['mom', 'dad'], 'happy', ['sleeping', 'eating'], ['tacos','apple'], ['51573f','c4bb8d'], 'sun'));
blogEntries.push(new BlogEntry(1, 'October 15, 2021', ['sara', 'mom'], 'tired', ['lifeguarding', 'homework'], ['rice crispy treat', 'sandwich'], ['red', 'white'], 'sun'))
blogEntries.push(new BlogEntry(2, 'August 31, 2021', ['meeze', 'mom', 'jill', 'matt'], 'silly', ['partying'], ['cake', 'pasta'], ['blue'], 'rain'))
console.log(blogEntries);


//connect to the dynamo aws db
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

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