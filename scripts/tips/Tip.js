// tip component which renders individual tip objects as HTML 
const tipComponent = (tip) => {
  return `
    <div class="tip">
    <h4>${tip.title}</h4>
    <p>${tip.tip}</p>
    </div>
  `
}
export default tipComponent


