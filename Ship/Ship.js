export class Ship {
  static get CLASSES() {
    return Object.freeze({
      CARRIER: { name: 'carrier', size: 5 },
      BATTLESHIP: { name: 'battleship', size: 4 },
      CRUISER: { name: 'cruiser', size: 3 },
      SUBMARINE: { name: 'submarine', size: 3 },
      DESTROYER: { name: 'destroyer', size: 2 }
    })
  }

  constructor({name, size}) {
    this.name = name
    this.size = size
    this.hits = 0
    this.health = 100
  }

  shoot() {
    if(this.hits < this.size){ 
      this.hits = this.hits + 1
    }
  }

  get sinked() {
    return this.size === this.hits
  }

  health() {
    this.health = (100/this.size) * (this.size -this.hits)
    return (100/this.size) * (this.size -this.hits)
  }

}
