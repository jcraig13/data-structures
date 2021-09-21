Weekly Assignment 3

In this assignment, I read in data from weekly assignment 2: a text file of addresses in New York City

In the file week3.js:

I read the content from addressArray.json into a variable called content.

I signed up for an TAMU API key and used an environment variable to access the API data of coordinates. I made a query for each address in address[] and read the data from the API into an array called meetingData[]. After reading all the information in and out, I stringified meetingsData into a file called /Week3/data.json.

I noticed that there was a lot of unecessary information in the JSON file. I wanted to come up with a way to clean it up without accessing the API over and over again. So I created a new JavaScript file called format.js and imported the data.json file I just created. This file's purpose is to clean the data.json file to condense it into a JSON format string that just inclodes Latitude and Longitude. This information is stored in a string variable called: finalOut.

I printed that to a file called /Week3/cleanedData.json

I made sure that the stringified JSON file passed through a JSON validator without issue.
