
class PeopleDatabase {
    constructor(dbName, storeName) {
        this.dbName = dbName;
        this.storeName = storeName;
    }

    async openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
            };
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject(event.error);
        });
    }

    async addPerson(person) {
        const db = await this.openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.add(person);
            request.onsuccess = (event) => resolve({ id: event.target.result, ...person });
            request.onerror = (event) => reject(event.error);
        });
    }

    async getPeople() {
        const db = await this.openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject(event.error);
        });
    }
}

const peopleDatabase = new PeopleDatabase('peopleDB', 'people');

// Load existing people from IndexedDB
(async () => {
    try {
        const people = await peopleDatabase.getPeople();
        people.forEach((person) => addToTable(person));
    } catch (error) {
        console.error('Error fetching people from IndexedDB:', error);
    }
})();

document.getElementById('person-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const person = createPerson(name, age, height, weight);
    try {
        const addedPerson = await peopleDatabase.addPerson(person);
        addToTable(addedPerson);
    } catch (error) {
        console.error('Error adding person to IndexedDB:', error);
    }

    event.target.reset();
});

function createPerson(name, age, height, weight) {
    return {
        name: name,
        age: age,
        height: height,
        weight: weight,
    };
}

function addToTable(person) {
    const table = document.getElementById("people-table");

    const row = table.insertRow();
    row.insertCell().innerText = person.name;
    row.insertCell().innerText = person.age;
    row.insertCell().innerText = person.height;
    row.insertCell().innerText = person.weight;
}