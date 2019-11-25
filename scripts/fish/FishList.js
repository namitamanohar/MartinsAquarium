
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

const FishListComponent = () => {

  // Get a reference to the `<article class="fishList">` element
  const contentEle = document.querySelector(".fishListArticle")
  const fishes = useFish()


  // Add to the existing HTML in the content element
  contentEle.innerHTML += `
      <section class="fishList">
          ${
            fishes.map(
              (currentFish) =>{
                return FishComponent(currentFish)
              }
            ).join("")
          }
      </section>
  `
}

export default FishListComponent