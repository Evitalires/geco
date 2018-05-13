export const HandleError = (event, component) => {
  let input = event.target
  let p = input.nextElementSibling
  let label = input.previousElementSibling

  //Styles
  p.style.display = 'block'
  p.style.color = 'red'
  label.style.color = 'red'
  setTimeout(() => {
    component.setState({ error: false })
    //unsetting Styles
    p.style.display = 'none'
    label.style.color = '#788895'
    label.style.color = '#48ACEC'
  }, 1000)
  return true
}
