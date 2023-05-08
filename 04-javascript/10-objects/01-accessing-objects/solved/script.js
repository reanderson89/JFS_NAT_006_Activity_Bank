let joeBob = {
    name: {
        first: "Joe",
        last: "Bob"
    },
    age:38,
    height: '5"11',
    awake: true,
    hair: {
        color: "brown",
        length: "long",
        isClean: false
    },
    clothes: [
        {
            type: "t-shirt",
            color: "black",
            size: "medium"
        },
        {
            type: "jeans",
            color: "blue",
            waist: 36,
            inseam: 32,
            "pocket contents": [{
                item: "wallet",
                money: 40,
                cards: 3
            },
            {
                item: "phone",
                type: "nokia",
                incomingCall(){
                    if (joeBob.awake){
                        console.log("ring ring, ring ring, ring ring... Hello, this is Joe Bob")
                    } else {
                        console.log("ring ring, ring ring, ring ring... Thanks for calling, please leave a message.")
                    }
                },
                notification(){
                    console.log("DING!")
                }
            }
        ]
        },
        {
            type: "shoes",
            color: "black/white",
            size: 10
        }
    ]
}

// Use the above object to print the following items to the console

// age
console.log(joeBob.age)
// first name and last name in the same line ( you will have to concat )
console.log(`${joeBob.name.first} ${joeBob.name.last}`)
// is joe bobs hair clean? If not then print "Joe Bob should wash his hair."
if(!joeBob.hair.isClean){
    console.log(`${joeBob.name.first} ${joeBob.name.last} should wash his hair`)
}
// the entire array of clothes
console.log(joeBob.clothes)
// the waist size of joe bobs jeans
console.log(joeBob.clothes[1].waist)
// run the method incomingCall(), run it again but have the call go to voicemail instead.
joeBob.clothes[1]["pocket contents"][1].incomingCall()
joeBob.awake = false
joeBob.clothes[1]["pocket contents"][1].incomingCall()
// the "type" of the last object in the clothes array
console.log(joeBob.clothes[joeBob.clothes.length - 1].type)
