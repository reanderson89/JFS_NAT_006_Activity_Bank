# Form-Input

* For this activity you are tasked to gather the information from the form entered, and then display it in the given table.

* You should have an event listener that is set to listen for the "submit" event of the form. You will need to select the `<form>` by its id of "empForm" in order to add the event listener. You will also need to add "event" as a parameter to the callback function you give the .addEventListener().

* Make sure to use "event.preventDefault()" (what is event.preventDefault()? https://www.w3schools.com/jsref/event_preventdefault.asp ) in the event listener so that the page doesn't refresh, you won't be able to get the information submitted otherwise.

* You will need to use the ".value" property on the form inputs you are selecting through the DOM to access the information that was entered in the input field.

* From here you can handle displaying the information to the page in different ways.
    - You could create a new "tr" element and give it the content of "td" with the values you got, all inside of the event listener.
    - You could create a separate function that handles displaying the information to the page, you could put all of the values in an object and then call the other function to do the work and pass in your newly created object.
    - You could have a global array that you add all of the objects into from the event listener, and then have a separate function that when called from the event listener loops through the array and adds them to the table.
    - You could come up with an entirely different way of making it all work too! The above are just some ideas to get the brain in motion.




