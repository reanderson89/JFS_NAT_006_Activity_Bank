const gearCards = document.getElementById("gearCards")

const gearController = new GearController()




const displayGear = function(){
    let gearArr = gearController.getLocalStorage()
    gearCards.innerHTML = ''
    gearArr.forEach(gear => {
        let card = document.createElement("div")
        card.classList.add("col-3","m-4")
        card.innerHTML = `
        <div class="card">
        <img src="${gear.url}" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">${gear.type}</h5>
          <p class="card-text">${gear.price}</p>
          <p class="card-text">${gear.category}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
        gearCards.append(card)
    })

    console.log(gearArr)

}

displayGear()

