const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
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
  document.querySelector("#button--Bart").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Bart")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--Guppy").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Guppy")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--Nemo").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Nemo")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--Dory").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Dory")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--Marlin").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Marlin")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--Goldie").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--Goldie")
          theDialog.showModal()
      }
  )

}

export default initializeDetailButtonEvents