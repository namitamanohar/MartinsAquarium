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
  document.querySelector("#button--Madrid").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Madrid")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--Nassau").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--Nassau")
        theDialog.showModal()
    }
)
document.querySelector("#button--Antananarivo").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Antananarivo")
      theDialog.showModal()
  }
)
document.querySelector("#button--NosyBe").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--NosyBe")
      theDialog.showModal()
  }
)
document.querySelector("#button--Melbourne").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Melbourne")
      theDialog.showModal()
  }
)
document.querySelector("#button--Manila").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Manila")
      theDialog.showModal()
  }
)


    }
export default initializeLocationButtonEvents