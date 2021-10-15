# Week 4.2 Assignment

This weeks assignment was to take the data from aa meetings and create a relational table in PostgreSQL on AWS

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
