import { Cell } from './Cell.js'

export class Grid {
  constructor(size = 5) {
    this._size = size
    let newGrid = []
    for (let i = 0; i < size; i++) {
      newGrid[i] = []
      for (let j = 0; j < size; j++) {
        newGrid[i][j] = new Cell({ occupied: false })
      }
    }
    this._grid = newGrid
  }

  get grid() {
    return this._grid
  }

  set grid(grid) {
    this._grid = grid
  }

  get size() {
    return this._size
  }

  set size(size = 5) {
    this._size = size
  }

  placeShip(ship, firstCell, direction) {
    let { i, j } = Cell.Position(firstCell)
    if (this._grid[i][j].occupied) {
      return { message: '[ERROR] Could not place your ship -- Cell occupied' }
    }
    if (direction == 'h') {
      //check if j is available for the size of the ship
      let canPlace = true
      for (let p = i; p < i + ship.size + 1; p++) {
        if (this._grid[i][p].occupied || this._grid[i][p] == undefined) {
          canPlace = false
          break
        }
      }
      if (canPlace) {
        for (let p = i; p < i + ship.size + 1; p++) {
          this._grid[i][p].occupied = true
          this._grid[i][j].place(ship)
        }
        return {ship: ship, placed: true, firstCell: firstCell}
      } else {
        return {ship: ship, placed: false, message: '[ERROR] Cells are either out of bounds or occupied'}
      }
    } else if (direction == 'v') {
      //check if i is available for the size of the ship
      let canPlace = true
      for (let p = i; p < i + ship.size ; p++) {
        if (this._grid[p][j].occupied || this._grid[p][j] == undefined) {
          canPlace = false
          break
        }
      }
      if (canPlace) {
        for (let p = i; p < i + ship.size ; p++) {
          this._grid[p][j].occupied = true
          this._grid[p][j].place(ship)
        }
        return {ship: ship, placed: true, firstCell: firstCell}
      } else {
        return {ship: ship, placed: false, message: '[ERROR] Cells are either out of bounds or occupied'}
      }
    } else {
      return { message: '[ERROR] Wrong direction input -- it has to be h or v' }
    }
  }

  shootAt(cell = 'A1') {
    let { i, j } = Cell.Position(cell)
    if (i < this._size && j < this._size) {
      if (this._grid[i][j].occupied) {
        if(this._grid[i][j].ship.sinked) {
          return {cell: cell, hit: true, miss: false, message: `Ship has already sinked: ${this._grid[i][j].ship.getType()}`}
        } else {
          this._grid[i][j].ship.shoot()
          if(this._grid[i][j].ship.health === 0) {
            return { cell: cell, hit: true, miss: false, message: `You just sinked: ${this._grid[i][j].ship.getType()}` }
          } else {
            return { cell: cell, hit: true, miss: false, message: 'none' }
          }
        }
      } else {
        return { cell: cell, hit: false, miss: true, message: 'none' }
      }
    } else {
      return { cell: cell, message: '[ERROR] Wrong input', size: this._size }
    }
  }
}
