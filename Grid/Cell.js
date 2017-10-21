export class Cell {
  constructor({ occupied } = { occupied: false }) {
    this._occupied = occupied
  }
  get occupied(){ return this._occupied }
  set occupied(value){ this._occupied = value }

  static Position(cell) {
    let i = cell.toLowerCase().charCodeAt(0) - 97
    let j = parseInt(cell.substring(1) - 1, 10)
    return {i: i, j: j}
  }

  place(ship) {
    this.ship = ship
  }
}
