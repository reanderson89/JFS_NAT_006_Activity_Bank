class GearController {
    constructor(){
        this.currentID = 0;
        this.gearArray = []
    }

    addGear(url, type, price, category){
        const gearObj = {
            url,
            type,
            price,
            category,
            id: this.currentID++
        }
        this.gearArray.push(gearObj)
    }

    setLocalStorage(){
        localStorage.setItem("gear", JSON.stringify(this.gearArray))
        localStorage.setItem("current-id", JSON.stringify(this.currentID))
    }

    getLocalStorage(){

        this.gearArray = JSON.parse(localStorage.getItem("gear")) || []
        this.currentID = JSON.parse(localStorage.getItem("current-id")) || 0
        return this.gearArray
    }
}
