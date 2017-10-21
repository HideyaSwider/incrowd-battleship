import { Ship } from '../Ship.js'

export class Battleship extends Ship {
  constructor() {
    super(Ship.CLASSES.BATTLESHIP)
  }
  getType() {
  	return('BATTLESHIP')
  }
}