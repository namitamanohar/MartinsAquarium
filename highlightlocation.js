
const addMouseOverLocationEventListeners =() => {

  const fishCards=document.querySelectorAll(".location__card");
  
  for (const card of fishCards){
    card.addEventListener(
      "mouseover", 
      (theMouseOverEvent) => {
        card.classList.add("highlightFish")
      }
      
      )
  
    card.addEventListener("mouseout", theMouseOutEvent =>{
      card.classList.remove("highlightFish")

    })
  }
  
}

export default addMouseOverLocationEventListeners