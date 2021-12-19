# Process Blog

## Instructions

You will expand on weekly assignments 5, 6, and 10 to capture, clean, and store all data for "Process Blog"--a source of semi-structured, qualitative data. The data should be stored in Amazon DynamoDB and queried using the `aws-sdk` module in Node. You will design and create an interface to display relevant diary entries. 

## Introduction

This project is to display all the places I've eaten at. I want to keep a diary of where I've eaten, what I got, and if it's worth going back. This is good for a user to get recomendations of where to eat.
The main audience of this project is me and my friends. We are always going back and forth about where to eat. This is a great place to find something when you don't care about going someplace new.
You can sort by the most recent restaurant I've been to, the highest rated, or if it's clode to my house.

On the right hand side is a visualization of where I've eaten over the time.

## Dynamo DB

I connected to AWS Dynamo DB to store this information. My table is set up like:

(id, date visited, restaurant name, star rating, lat, long)

```
class BlogEntry {
  constructor(primaryKey, date, restName, stars, notes, lat, long) {
    this.id = {};
    this.id.N = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.restName = {};
    this.restName.S = restName;
    this.stars = {};
    this.stars.N = stars.toString(); 
    if (notes != null) {
      this.notes = {};
      this.notes.S = notes; 
    }
    this.lat = {};
    this.lat.N = lat.toString();
    this.long = {};
    this.long.N = long.toString();
  }
}
```

After connecting to the AWS DynamoDB table, we can push an object to the DB.

```
blogEntries.push(new BlogEntry(0, 'August 10, 2021', 'Tua Cucina', 5, 'really good salsa', 41.0550982, -73.9716461))
blogEntries.push(new BlogEntry(1, 'December 19, 2019', 'White Maple', 5, 'fun place for a date', 40.979427337646484, -74.11746978759766))
blogEntries.push(new BlogEntry(2, 'June 31, 2022', 'B Side Grill', 5, 'really good burger', 41.7476941, -74.086073))
```

### This is what the database looks like when queried

<img width="446" alt="Screen Shot 2021-12-19 at 3 17 11 PM" src="https://user-images.githubusercontent.com/48970337/146690675-ea57cbcb-65d6-4dcd-af77-24032384d0f5.png">

## This is the inital sketch of how I want the final project to look like

![Page 1](https://user-images.githubusercontent.com/48970337/146690694-1d3d9e16-7534-4fa6-a4e9-a6000af8060c.jpg)


## High fidelity mockup

### This is the overview page

It gives all the information of what restaurants are on the map. With a scrollable column to look at the different places to eat, a description, and a rating. I wanted this site to be designed more fun and elegant.

![overview2](https://user-images.githubusercontent.com/48970337/146690744-272dd644-4012-418d-842b-1d79b9f3f0c4.png)


### This is an example of what the drop down menu should look like

![sortby options](https://user-images.githubusercontent.com/48970337/146690762-0bc86c66-c1b2-4af8-bba2-7f7967c3b9a8.png)


### This is what the site would look like if you clicked on a map icon

![click](https://user-images.githubusercontent.com/48970337/146690773-0946d60f-4f07-4269-9f72-dca9bb07daf5.png)


## Future

In the future, I would like to continue updating this database. I think it is a great place to store personal information and very helpful for me personally. This would be a great tool for anyone to have.



