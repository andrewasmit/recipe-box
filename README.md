# Recipe Box
## A Better Way to Store your Online Recipes

### Description:
This is a Single-Page Application that gives users a space to store their favorite online recipes in a way that makes them easy to find, categorize, and edit. This also has a space to search for new recipes and quickly add them to our own Recipe Box at the click of a button!

### Project Details
This project is built with React.js and utilizes a db.json to act as a server the back-end. The repo for the back-end can be found [HERE](https://github.com/andrewasmit/recipe-box_back). 

This project is styled with vanilla CSS.

### Installation
Fork and clone the back-end repo and then change into the directory you created.
When you are in the newly created directory, run ```npm run dev ``` to run the json server for the back-end.

Next, open a new terminal window and fork and clone the this repo. Then, change into that directory as well.
When you are in the newly created directory, run ```npm install && npm start ``` to download all dependencies and run the project on your local server. Since the back-end was deployed first, it will connect to localhost:3000 and your front end will ask to run on a different network. Click "Y" for "yes" and the page should deploy accordingly.

**In order for the project to run properly, the back-end repo needs to be run on localhost:3000 while the front end runs on 3001.**

### Credentials
This project's icon was provided courtesy of 'Those Icons' via [flaticon.com](https://www.flaticon.com/).

This project utilizes an API from [rapidapi.com](https://rapidapi.com/hub) for the search page.

### How to Use
Upon starting the application, a home page displays. You can then navigate to either your own recipe box or a search engine page of new recipes. Should you find a new recipe that you like, click the "Add to My Recipe Box" button to auto-populate the "add a new recipe" form. Double-check to make sure all of the input info is correct and then submit. That new recipe, is then saved in your Recipe Box for future reference! The same process above works for any recipe you may come across on the internet and want to store in your Recipe Box.

In your Recipe Box, you have the ability to filter your recipes specific to meal; Breakfast, Lunch, Dinner, etc. You may also search by name to help narrow down you recipes.
