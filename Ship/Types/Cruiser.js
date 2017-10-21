import { Ship } from '../Ship.js'

export class Cruiser extends Ship {
  constructor() {
    super(Ship.CLASSES.CRUISER)
  }
  getType() {
    return('CRUISER')
  }
}