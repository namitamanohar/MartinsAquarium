
const addMouseOverLocationEventListeners =() => {

  const locationCards=document.querySelectorAll(".location__card");
  
  for (const card of locationCards){
    card.addEventListener(
      "mouseover", 
      (theMouseOverEvent) => {
        card.classList.add("highlightLocation")
      }
      
      )
  
    card.addEventListener("mouseout", theMouseOutEvent =>{
      card.classList.remove("highlightLocation")

    })
  }
  
}

export default addMouseOverLocationEventListeners