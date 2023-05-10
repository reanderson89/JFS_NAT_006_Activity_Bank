const dogArray = [
    {
      name: "Buddy",
      description: "Buddy is a playful Golden Retriever who loves to fetch balls and swim in the lake.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Molly",
      description: "Molly is a charming Cocker Spaniel who enjoys long walks in the park and cuddling with her owners.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Max",
      description: "Max is an energetic German Shepherd who excels at obedience training and loves to play with other dogs.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Bella",
      description: "Bella is a gentle Labrador Retriever who is great with children and loves to play with her squeaky toys.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Charlie",
      description: "Charlie is a lively Beagle who loves to sniff out new scents on long hikes in the woods.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Lola",
      description: "Lola is a stylish Poodle who loves to show off her beautiful fur at dog shows and social events.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Daisy",
      description: "Daisy is a sweet Dachshund who enjoys digging in the yard and cuddling on the couch.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Rocky",
      description: "Rocky is a strong Boxer who is protective of his family and loves to join them for outdoor activities.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Sadie",
      description: "Sadie is a loving Border Collie who enjoys herding and is great at agility courses.",
      image: "https://place-puppy.com/300x300"
    },
    {
      name: "Oliver",
      description: "Oliver is a friendly Yorkshire Terrier who loves to explore new places and make friends with everyone he meets.",
      image: "https://place-puppy.com/300x300"
    }
  ];

  

const dogList = document.getElementById("dog-list")

// for each item in the array, create a card and append it to the page.
dogArray.forEach(dog => {
    let dogCard = document.createElement("div");
    dogCard.classList.add("col-4")
    dogCard.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${dog.image}" class="card-img-top" alt="The dog ${dog.name}">
    <div class="card-body">
      <h5 class="card-title">${dog.name}</h5>
      <p class="card-text">${dog.description}</p>
    </div>
  </div>`

  dogList.append(dogCard)
})




