import { Ship } from '../Ship.js'

export class Destroyer extends Ship {
  constructor() {
    super(Ship.CLASSES.DESTROYER)
  }
  getType() {
    return('DESTROYER')
  }
}