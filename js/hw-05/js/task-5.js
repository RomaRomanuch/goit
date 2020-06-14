class Car {
  static getSpecs(car) {
    for(const key of Object.keys(car)) {
      console.log(`${key} : ${car[key]}`);
    }
  }

  constructor({speed, price, maxSpeed, isOn, distance}){
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get _price() {
    return this.price;
  }

  set _price(value){
    this.price = value;
  }

  turnOn() {
    if(!this.isOn) {
      this.isOn = true;
    }
  }

  turnOff() {
    if(this.isOn) {
      this.isOn = false;
      this.speed = 0;
    }
  }

  accelerate(value) {
    let totalSpeed = this.speed + value;
    if (totalSpeed <= this.maxSpeed){
      this.speed += value;
    }
  }

  decelerate(value) {
    let totalSpeed = this.speed - value;
    if (totalSpeed >= 0){
      this.speed -= value;
    }
  }

  drive(hours) {
    let distance  = hours * this.speed;
    if(this.isOn){
      this.distance += distance; 
    }
     
  }
}

/////////
const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000











