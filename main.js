import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverTipEventListeners from './tipbox.js'
import { useFish } from './FishDataProvider.js'

initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverTipEventListeners()
const allOfTheFish = useFish()

for (const fish of allOfTheFish){
  console.log("all the fish:", allOfTheFish)
}