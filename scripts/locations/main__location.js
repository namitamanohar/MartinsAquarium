import { useLocation } from './LocationDataProvider.js'
import LocationListComponent from './LocationList.js'
import initializeLocationButtonEvents from './locationDialog.js'
import addMouseOverLocationEventListeners from './highlightlocation.js'


LocationListComponent()

initializeLocationButtonEvents()

addMouseOverLocationEventListeners()
