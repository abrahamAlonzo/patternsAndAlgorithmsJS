class VehicleFactory {
    constructor(vehicleType) {
        switch(vehicleType){
            case "car":
                this.vehicleCtor = Car;
                break;
            case "truck":
                this.vehicleCtor = Truck;
                break;

            case "twoWheeler":
                this.vehicleCtor = TwoWheeler;
                break;
        }
    }

    create(details) {
        return new this.vehicleCtor(details)
    }
}

class CarFactory extends VehicleFactory {
    constructor() {
        super("car")
    }
}


class TruckFactory extends VehicleFactory {
    constructor() {
        super("truck")
    }
}


class TwoWheelerFactory extends VehicleFactory {
    constructor() {
        super("twoWheeler")
    }
}



class Vehicle {
    constructor(vehicleType, make, model) {
        this.vehicleType = vehicleType;
        this.make = make;
        this.model = model;
    }

    printDetails() {
        console.log("vehicleType",this.vehicleType,
        "make",this.make,
        "model", this.model
        )
    }

    drive() {
        console.log("Drive", this.vehicleType,this.model, this.make)
    }

    fillFuel() {
        console.log("Drive", this.vehicleType,this.model, this.make)
    }
}


class Car extends Vehicle {
    constructor(details) {
        super("car", details.make, details.model);
        this.carType = details.carType;
    }
    printDetails() {
        console.log("vehicleType",this.vehicleType,
        "make",this.make,
        "model", this.model
        )
    }    
}

class Truck extends Vehicle {
    constructor(details) {
        super("truck", details.make, details.model);
        this.carType = details.carType;
    }
    printDetails() {
        console.log("vehicleType",this.vehicleType,
        "make",this.make,
        "model", this.model
        )
    }

}

class TwoWheeler extends Vehicle {
    constructor(details) {
        super("twoWheeler", details.make, details.model);
        this.carType = details.carType;
    }
    printDetails() {
        console.log("vehicleType",this.vehicleType,
        "make",this.make,
        "model", this.model
        )
    }

}