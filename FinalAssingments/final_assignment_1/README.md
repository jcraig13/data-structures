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

data:image/png;base64,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

https://www.google.com/maps/@40.7237536,-74.0011497,15z?hl=en
