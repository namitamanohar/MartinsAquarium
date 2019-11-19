
const addMouseOverTipEventListeners =() => {

  const asideTips=document.querySelectorAll(".tip");
  
  for (const tip of asideTips){
    tip.addEventListener(
      "mouseover", 
      (theMouseOverEvent) => {
        tip.classList.add("tipBox")
      }
      
      )
  
    tip.addEventListener("mouseout", theMouseOutEvent =>{
      tip.classList.remove("tipBox")

    })
  }
  
}

export default addMouseOverTipEventListeners