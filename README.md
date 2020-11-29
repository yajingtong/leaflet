# Leeds Hygiene map
## Introduction 

The Food Hygiene Rating Scheme has great value to consumers when it comes to choose places to eat. Food hygiene rating represents the hygiene standard of the enterprise, which is essential in food industry. The “Leeds Hygiene map” was designed to rise importance of food hygiene. It offers to consumers supportive hygiene details of each business related to food providing in Leeds. The hygiene data acquired from Leeds city council.

As the pervious observation of the hygiene map in city of Leeds that there is major gap in user department when it comes to data visualisation. To overcome this problem, Leeds hygiene map was designed as a simple Website which allows user to view hygiene data (from pgAdmin server) on a web-based map, which covers all basic information required to visualize hygiene information on the website. Along with that user can interact with the map by click zoom button, select different attributes to display on the map.

## Requirement gathering process
The data is gathered from Leeds.gov.uk, csv formal file and was uploaded to the pgAdmin server. To use the application, user needs to acquire VPN connection to enable to request data from server. 

## Method
This map project contains information of different types of commercial enterprise and the hygiene ratting, address data. The programming method used in this project constitutes of the server-side programming and client-side programming. 
1. In terms of server-side programming, Database manage system pgAdmin database was used to store and manage data. PHP (Hypertext preprocessor) file use SQL (Structured query language) to connecting to database and manipulate data. And Ajax was used to retrieve data from database.
2. Client-side programming, Leaflet, an open-source client-side Java script mapping library was used to mapping the data in this project.

## Technical Features
This site is designed using the latest web technologies available. This is a Web-based mapping site build by using HTML & supporting technologies. the technologies used are Following: HTML, JavaScript, CSS, PHP, AJAX.

## Main technical features of the site are as listed below: 
HTML (Hypertext markup language) was used to provide outline and structure for the webpage.
CSS (Cascaded Style Sheet) keeps consistency in background, font, colors, and size of text. On the website there is similarity in the font, colors and the size of headings, titles, paragraphs. It also provides the capacity of carrying out the required modification easily when need to modify the design of the overall website by making changes in only one CSS file.

Leaflet map Integrated: Leaflet objects are broadly used in this project, including map, layer and events object. To create an interactive panel of different types of business, several marker variables and icon variables are created with customized icon variable. Addition to the layer control and leaflet zoom bar plugin was used in this website. Layer control object was used to control display of data.

To plot data, and for the displaying of the Leeds hygiene map, leaflet API was use and several opensource base map API. It makes user easy to browse the locations in customized leaflet map. 
JQuery library was also used to make AJAX request to the server, AJAX request was used in function fetchData () to connect to server, accepts a URL which the request is sent, $ getJSON function was used to request data and return with JSON encoded data.

## Problem outline:
1.	The webpage may lose some of the fonts display in IE Brower. 
2.	Attempt to add filter to the map using jQuery library with leaflet control search, however error occurs when “addControlsearch” function was called.
3.	The map is overcrowded by all the markers and inefficient, which should make use of the filter function to choose appreciate amount of data in display.
4.	Attempt to add search box on the map, the issue is that control button added in HTML doesn’t work well with leaflet map object.


## Ways of Improve
To improve the capability of the website, approaches are follows:
1.	to use jQuery library filter data, which allows to select data by various attribute.
2.	Add function to Submit button in search box, which allows to request the data according to input attribute. 
3.	mobile version could be added by utilize the leaflet mobile method.which covers all basic information required to upload the content on the web site. Form is made available for downloading itself on the district web site for every department. 
4.	a comment section can be added to the webpage in order to gather feedbacks, which allows to update hygiene information on website and proper information tracking process is maintained by keeping proper entries of the information update on the website. 


## Conclusion
The “Leeds Hygiene map” webpage is a combination of server-side and client-side programming, the site visualize ratting of hygiene and allows for simple user interactions, which offers user information supports of their choices. To improve the webpage there could be data uploading functions.

