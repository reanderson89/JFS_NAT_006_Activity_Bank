
// * For this activity you will create a basic HTML website using only javascript. The website should be about a favorite type of food, or places, or music, or whatever you can think of.

// * You will need to use methods and properties like `.createElement()`, `.innerHTML`, and `.appendChild()`

// * Your website should have two sibling `<div>` elements in the `<body>`

// * The first "div" should have two children elements, an `<h1>` and a `<p>` element. The "h1" should be a heading for your page, the "p" should be a brief description of what your page is about.

// * The second "div" should also have two children elements, an `<img>` and a `<ul>` element. The "img" should be something related to your page. The "ul" should contain 4-5 children `<li>` elements about your page. You should use a loop for the "li" elements to prevent you from having to hardcode each item. This means you will need to create an array of what you want your "li" to be, so you can loop through it.

// Step 1: create div element
let div1 = document.createElement("div");

// step 2: give give the div content
let h1 = document.createElement('h1')
h1.innerHTML = "Pizza Page"
div1.append(h1)

let p = document.createElement('p')
p.innerHTML = "Welcome to my pizza page!"
div1.append(p)


// step 3: append the div to the body
document.body.append(div1)

let div2 = document.createElement("div");

let img = document.createElement("img")
// img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1VCA92iQEywYuWUZ5EW-g5dU5t2Auar0_A&usqp=CAU");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1VCA92iQEywYuWUZ5EW-g5dU5t2Auar0_A&usqp=CAU";

div2.append(img)

let ul = document.createElement("ul")
let favPizza = ["pepperoni", "cheese", "meat", "margherita"]

// loops through the array and creates an "li" element and appends it to the "ul" element for each item of the array
// for(let i = 0; i < favPizza.length; i++){
//     let li = document.createElement("li")
//     li.innerHTML = favPizza[i];
//     ul.appendChild(li)
// }

favPizza.forEach(pizza => {
    let li = document.createElement("li")
    li.innerHTML = pizza;
    ul.appendChild(li)
})

div2.append(ul)

document.body.append(div2)








