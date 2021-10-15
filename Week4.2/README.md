# Week 4.2 Assignment

This weeks assignment was to take the data from aa meetings and create a relational table in PostgreSQL on AWS

I am basing this off of a draft from weekly assignment 4.1

## draft from weekly assignment 4.1 plan

Using the AA site: https://parsons.nyc/aa/m08.html, create a database model to accuratley represent the information displayed in the first three rows.

## The first three rows in the AA Website looks like:
<img width="616" alt="Screen Shot 2021-09-27 at 3 10 04 PM" src="https://user-images.githubusercontent.com/48970337/134970261-e17cf3f1-15c7-4b5f-ad4b-e97984e55b73.png">

These rows have information such as: building location, meeting times, and meeting types. During last class's lesson, we discussed which of these three elements, in what order, are necessary to display meetings accuratley and efficiently for users.
While studying the meetings, I decided to create two tables to represent this information. The first table being the meeting locations, the second being meeting times and types.

### This is the sketch of the tables I used:

![TableSketch](https://user-images.githubusercontent.com/48970337/134971060-3ec63899-94e1-4703-a5ac-e4fee7364061.jpg)

In the table that represents the Meeting's Addresses I used the attributes (BuildingID, Building, MeetingName, StreetAddress, City, State, Zip, SpecialAddress (such as basement or floor number), and WheelchairAccess)
In order to link these locations to their meeting times and types, I created a BuildingID as the primary key in the address table. BuildingID is also the foreign key used in the Meeting Time Table.

Meeting Time Table is represented by the attributes: (BuildingID, DayOfTheWeek, BeginTime, EndTime, MeetingType, and SpecialMeeting (sometimes a certail week of the month has a different meeting on that day)).
BuildingID is used as the foreign key and the primary key in this table. The idea of this being used in both tables is to connect the meeting times/types to where whey are being held.

### An example of the 2 tables:

<img width="880" alt="Screen Shot 2021-09-27 at 3 29 20 PM" src="https://user-images.githubusercontent.com/48970337/134972551-1ca1a8cf-1f96-4379-9b3a-cc5a848bc12a.png">

### This is an example of how the meetings would be represented after the BuildingID connects them:

<img width="1249" alt="Screen Shot 2021-09-27 at 3 27 49 PM" src="https://user-images.githubusercontent.com/48970337/134972307-0997c217-fef2-4889-815e-ac9c9625668c.png">


### Setting up a database in PostgreSQL

First, I created a PostgreSQL table in AWS called "aalocations" 
This table has 3 columns, (address, lat, and long)
I read in the data from my week 3 assignment and connceted to PostgreSQL
Using my AWS username, aws host credentials, and an environment variable for my password to connect to PostgreSQL

### Week4_part1.js

In part 1's code I used the sample code to create and drop a table in PostgreSQL called "aalocations"

### Week4_part2.js

Part 2's code is where I copied the data from week 3's json file. I added the data to a variable called addressForDb. Then asynchronously added each row into the PostgreSQL table

## Week4_part3.js

This is where I checked my work to see if my table was accuratley working. I queried a SELECT * FROM aaloactions; to see if the output would show my data. I confirmed that the data was accurate and was completed.

All of these javascript files are left seperate so if I need to change something or use it again I will always have the starter code.
