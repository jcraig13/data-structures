//This format.js file reads in the data.json file and cleans up what information is displayed

//reads in /Week3/data.json
var fs = require('fs');
var data = fs.readFileSync('/home/ec2-user/environment/DataStructures/Week3/data.json');

//makes the JSON file a variable called json
var json = JSON.parse(data);


//create a variable to store a string to extract latitude and longitude from the JSON file and formats how the string is written
let finalOut = '[';
for(let i = 0; i < json.length; i++){
	   finalOut += ('{\"Latitude\":\"'+
	                (json[i].OutputGeocodes[0].OutputGeocode["Latitude"])+
	                '\",\"Longitude\":\"'+ 
	                (json[i].OutputGeocodes[0].OutputGeocode["Longitude"])+
	                '\"},');
}
finalOut += ']';
	
//writes the new JSON file with the cleaned data
console.log(finalOut);
fs.writeFileSync('/home/ec2-user/environment/DataStructures/Week3/cleanedData.json', finalOut);
