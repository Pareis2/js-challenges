The Challenge:
==============

This is a simple list of films that is generated from Javascript. It gradually builds up in complexity.

Commit your changes after completing each step of the challenge!

1. Take the list of films in the 'films' variable above and put them into the 'ul' list in the page
2. Make the list sorted alphabetically (hint: use the array.sort() function)
3. Enable users to add a film to the end of the list by entering it into the text box and clicking 'Add Film'
4. If the new film name is empty, don't add it to the list
5. Keep the list sorted when new films are added
6. Add a 'delete' button after each film to remove it from the list
7. Create a function that will build the list from the list of films and an element to populate.
   e.g. make_list(films, 'ul');
8. Call the function from the script tag in the HTML file to create the list
9. Put the function and all other code into an external JS file (main.js).

Normally when writing new functionality you would write tests as you go along (TDD - Test Driven Development).
Whilst learning Javascript we are going to write some tests after you have worked out how to solve the challenge.
Open up the "tests.js" file and take a look at the example tests in there. Open the file in your browser to see it running.
See if you can fill in some of the other empty tests to test the functionality you have just written.

Extra credit
 * Make deletion persist when new films are added
 * Add an edit button
 * Re-work into a class
