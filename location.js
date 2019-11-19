const initializeLocationButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const CloseButtons = document.querySelectorAll(".button--close2")

  for (const btn of CloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button--location1").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--location1")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--location2").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--location2")
        theDialog.showModal()
    }
)
document.querySelector("#button--location3").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--location3")
      theDialog.showModal()
  }
)
document.querySelector("#button--location4").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--location4")
      theDialog.showModal()
  }
)
document.querySelector("#button--location5").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--location5")
      theDialog.showModal()
  }
)
document.querySelector("#button--location6").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--location6")
      theDialog.showModal()
  }
)


    }
export default initializeLocationButtonEvents