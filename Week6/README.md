# Week 6 Assignment

## Part 1
### Write and execute a query for your AA data PostgreSQL

First, we'll connect to the aa database we created in assignmnet 4.2 in PostgreSQL using out username and environment variable password. 

In variable "thisQuery" we will input our SQL statement ```SELECT * FROM aalocations WHERE lat > 40.8232200234845;```

This SQL statement will return all columns from the aalocations table that are NORTH of latitude 40.8232200234845

This is what that query returned:
<img width="507" alt="Screen Shot 2021-10-15 at 12 40 15 PM" src="https://user-images.githubusercontent.com/48970337/137541292-b621b912-63ab-4e03-b1d5-5ef2d41782dc.png">

## Part 2
### Write and execute a query for your processblog data DynamoDB

In this part of the assignment, we will use sample code to query the DynamoDB processblog. After connecting to the AWS DynamoDB table, we can submit an object to query. A NoSQL db can only be queried on a primary key. The primary key for this DB is "id" and it logs the entries.

Since, I do not have a sort key and my primary key is only an integer, I will create a simple query to display the first entry: id = 0

The parameters needed to query process blog is:
tableName : processblog
KeyConditionExpression : primary key = QUERY PARAMS
ExpressionAttributeNames : use reserved words in DynamoDB
ExpressionAttributeNames : the query values
```
//queries the first entry made in process blog 
var params = {
    TableName : "processblog",
    KeyConditionExpression: "#tp = :topicName", // the query expression
    ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
        "#tp" : "id"
    },
    ExpressionAttributeValues: { // the query values
        //":topicName": {S: "weather"}
        ":topicName": {N: "0"}
    }
};
```

After this query object is created, it is sent to DynamoDB and send back the queried result:
<img width="521" alt="Screen Shot 2021-10-15 at 3 11 51 PM" src="https://user-images.githubusercontent.com/48970337/137543505-530b464a-64b7-4837-896d-64952bcc2e1b.png">
