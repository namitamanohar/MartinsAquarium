import { useLocation } from "./LocationDataProvider.js";
import LocationComponent from "./Location.js";

const LocationListComponent = () =>{
  const contentElement=document.querySelector(".locations")
  const locations=useLocation()


  contentElement.innerHTML += `
    <section class='locationList'>
      ${
        locations.map(
          (location)=>{
            return LocationComponent(location)
          }
        ).join("")
      }
    </section>
  `
}

export default LocationListComponent 