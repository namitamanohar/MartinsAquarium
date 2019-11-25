import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverTipEventListeners from './tips/tipbox.js'

import { useFish } from './fish/FishDataProvider.js'
import FishListComponent from './fish/FishList.js'

import { useTip } from './tips/TipDataProvider.js'
import TipListComponent from './tips/TipList.js'

FishListComponent()
TipListComponent()

addMouseOverEventListeners()
addMouseOverTipEventListeners()
initializeDetailButtonEvents()