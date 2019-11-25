const LocationComponent = (location) =>{
  return `
  <section class='location__card'>
    <h4 class="location__city">${location.city}, ${location.country} </h4>
    <p class="location__latlong">${location.latitude}, ${location.longitude}</p>
  <div class='location__button'>
    <button id='button--${location.city}'>Details</button>
    <dialog class='dialog--location' id='details--${location.city}'>
      <div> Location: ${location.region}</div>
      <div> ${location.advice}</div>
      <button class='button--close2' id='close-${location.city}'>Close Dialog</button>
    </dialog>
  </div>
    </section>
  `
}
export default LocationComponent

