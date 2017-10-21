import { Ship } from './Ship.js'
import { Destroyer, Cruiser, Battleship, Carrier, Submarine } from './Types'

export class ShipFactory {
  ship(type) {
    switch (type.name) {
      case Ship.CLASSES.CARRIER.name:
        return new Carrier()
      case Ship.CLASSES.BATTLESHIP.name:
        return new Battleship()
      case Ship.CLASSES.CRUISER.name:
        return new Cruiser()
      case Ship.CLASSES.SUBMARINE.name:
        return new Submarine()
      case Ship.CLASSES.DESTROYER.name:
        return new Destroyer()
      default:
        console.log('[ERROR] the type has to be one of: ', Ship.CLASSES)
        return null
    }
  }
}
