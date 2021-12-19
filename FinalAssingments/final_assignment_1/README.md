# AA Meeting Data

## Prompt

You will expand on weekly assignments 1, 2, 3, 4, 6, 7, and 10 to scrape all ten zones of New York's AA Meeting List to capture, clean, and store all meetings in Manhattan (zones one through ten). The meetings data should be stored in PostgreSQL and queried using the pg module in Node. You will use Leaflet to display relevant meetings as map markers with popups that show all relevant information about the meeting(s) at each marker. Here's an example of a submission in a previous class.

## Process

Parsing through the aa websites, I collected addresses and meeting information. Using the TAMU API, I created lat-long coordinates to allow me to display the meeting locations on a map.
I then entered the meeting information into an AWS PostgreSQL database.

Once I connected to the database that I created, this is an example of what I can query.

```SELECT * FROM aalocations WHERE lat > 40.8232200234845;```

<img width="507" alt="Screen Shot 2021-10-15 at 12 40 15 PM" src="https://user-images.githubusercontent.com/48970337/137541292-b621b912-63ab-4e03-b1d5-5ef2d41782dc.png">

## Initial Sketches

This is an example of what I wanted the website to look like:

![Page 0 (1)](https://user-images.githubusercontent.com/48970337/146688597-f1d22c16-af2e-4d3e-986d-5d03a17ce46a.jpg)

I wanted to include an option for the user. I think it is equally important to be able to sort through meetings based on location and by date. I think there are two types of meetings, one you need to go to weekly and one you need to go to ASAP. 
This allows the user to find a local meeting to make time for throughout the week and allows the user to find the next available meeting even if its a few subway stops away.

## High Fidelity Mockups

Because I am still cleaning the data, I decided to make high fidelity mockups to show you what this website would look like if I had extra time.

### The opening page of the website:

This frame shows a zoomed out map of nyc to show the spread of AA meetings

![overview](https://user-images.githubusercontent.com/48970337/146688743-66cd68ad-2316-42ba-82f7-82e86f7b2f55.png)


### This is what the user sees when the user enters an address

This fram shows a zoomed in version of the map of nyc to zoom in on the address provided

![location selection](https://user-images.githubusercontent.com/48970337/146688780-2f3a22a8-83e5-4b1e-b7a3-70115bf10281.png)


When the user clicks on a location marker this is what pops up:

![location selection click](https://user-images.githubusercontent.com/48970337/146688793-bf3dd442-f5ba-4723-96f0-a059d1df0c36.png)


### This is what the user sees when they search by day of the week and time

This frame zooms out again to show the spread of nyc meetings only displaying meetings that meet the given time criteria

![time selection](https://user-images.githubusercontent.com/48970337/146688858-5c3155cc-43bf-495e-9d93-607b6460e99e.png)


## Style

For the font used, I used Scope One as the main heading fonts. I used Roboto as the smaller font for the user to digest smaller information more easily.
The colors I used were #FFFFFF, #C4C4C4, #000000, and #566EC6

## Future

For the future of this project, I want to finish parsing through the data and make this high fidelity mockup into an actual working website.

## References:

https://www.aa.org/

https://www.google.com/maps/@40.7237536,-74.0011497,15z?hl=en
