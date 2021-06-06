// Driver class
class Driver {
	constructor(age) {
		this.age = age
	}
}

// Car class
class Car {
	drive() {
		console.log('Car has been driven!')
	}
}

// Proxy car class
class ProxyCar {
	constructor(driver) {
		this.car = new Car()
		this.driver = driver
	}

	drive() {
		if (this.driver.age <= 16) {
			console.log('Sorry, the driver is too young to drive.')
		} else {
			this.car.drive()
		}
	}
}

// Run program
const driver = new Driver(16)
const car = new ProxyCar(driver)
car.drive()

const driver2 = new Driver(25)
const car2 = new ProxyCar(driver2)
car2.drive()