import { Ship } from '../Ship.js'

export class Carrier extends Ship {
  constructor() {
    super(Ship.CLASSES.CARRIER)
  }
  getType() {
    return 'CARRIER'
  }
}
