
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useTip` from the data provider module
import { useTip } from "./TipDataProvider.js";
import tipComponent from "./Tip.js";

const TipListComponent = () =>{
  // Get a reference to the `<article class="fishList">` element
  const contentElement = document.querySelector(".tipList")
  const tips = useTip()

  
  // Add to the existing HTML in the content element

  contentElement.innerHTML +=`
  <div class="tipList">
    ${
      tips.map (
        (tip) =>{
          return tipComponent(tip)
        }
      ).join("")
    }
    </div>
  
  `

}

export default TipListComponent