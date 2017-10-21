import { Ship } from '../Ship.js'

export class Submarine extends Ship {
  constructor() {
    super(Ship.CLASSES.SUBMARINE)
  }
  getType() {
    return('SUBMARINE')
  }
}