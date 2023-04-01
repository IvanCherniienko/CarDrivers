class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  infoPeople() {
    console.log(`My name ${this.name} and I am ${this.age} years old`)
  }
}

class Auto {
    constructor(brand, model, year, carNumber) {
        this.brand = brand
        this.model = model
        this.year = year
        this.carNumber = carNumber
        this.driver = null
    }

    getDriver(person) {
    if (person.age >= 18) {
      this.driver = person
    } else {
      console.log(`Person ${person.name} is too young to use the car`)
    }
    }

    infoForCar() {
        console.log(`Driver of the car ${this.brand} ${this.model} ${this.year} with number ${this.carNumber} is set to ${this.driver.name}`)
            if (this.driver) {
                this.driver.infoPeople()
    }
    }
}

const person1 = new People('Ivan', 25)
const person2 = new People('Ilona', 23)
const person3 = new People('Alex', 17)

const car1 = new Auto('Kia', 'Rio', '2014', '9999')
const car2 = new Auto ('Mersedes', 'GLE', '2017', '7000')
const car3 = new Auto ('Renault', 'Logan', '2016', '5252')

car1.getDriver(person1)
car2.getDriver(person2)
car3.getDriver(person3)

car1.infoForCar()
car2.infoForCar()


