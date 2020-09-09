# book_app

**Author**: bayan alalm and Mohammad Eshtaiwi
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

adding the ability for a user to select a book from the API search results and add it to their collection, which will be persisted in a PostgreSQL database. Then, when a user navigates to the home page of the application, all of the books will be retrieved from the database and displayed on the screen. The API search form will be accessible through the menu

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

-   built our server by adding the npm install and spcific the port and adding the rout to achive the gols of this app. Create a basic server.js file. Make sure your server is listening for connections on a PORT. Remember to set the view engine and serve your static CSS files.
-   build our database and make connect between our database and the VS code and added the npm and anew routes
-   added routes to delet and update the information about our books

Feature Tasks

## Architecture

we was adding the ability for a user to select a book from the API search results and add it to their collection, which will be persisted in a PostgreSQL database. Then, when a user navigates to the home page of the application, all of the books will be retrieved from the database and displayed on the screen. The API search form will be accessible through the menu.we use node,express,ejs tampliting ,html,css langues by deploy it by herco and using the VScode and github
​
we was adding a detail view where a user can view the description and ISBN of a single book from the collection.

## Change Log

07-09-2020 4:59pm - Create a basic server.js file. Make sure your server is listening for connections on a PORT. Remember to set the view engine and serve your static CSS files.
08-09-2020 4:59pm Create a new view to display the details of a single book. This view should show the title, author, description, ISBN, bookshelf and image of the book. In the file tree provided above, this functionality is included in `views/pages/books/detail.ejs` and `views/pages/books/show.ejs`. The `detail.ejs` file is a partial file that contains just a `<section>` to render the details of a single book. Think of it as a resuable book component. The show.ejs file uses EJS syntax to include this partial.
09-09-2020 4:59pm In your detail view, add a button to reveal a form containing the information of that book. In the provided wireframes, this is shown as a button that says "Update Details" in the file named `13-details.png`.

[herco link](https://me-moh-booklist.herokuapp.com/)

```

```
