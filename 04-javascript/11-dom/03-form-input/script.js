const form = document.getElementById("empForm")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const nameVal = document.getElementById("name").value
    console.log(nameVal)
})