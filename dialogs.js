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
  document.querySelector("#button--bart").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--bart")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--guppy").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--guppy")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--nemo").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--nemo")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--dory").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--dory")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--marlin").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--marlin")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--goldie").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--goldie")
          theDialog.showModal()
      }
  )

}

export default initializeDetailButtonEvents