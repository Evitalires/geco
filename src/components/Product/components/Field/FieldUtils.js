

const FieldId = (Id, event, component) => {
  let label = Id.previousElementSibling
  let form = Id.parentElement
  let error = Id.nextElementSibling
  switch (event) {
    case 'state': return 'ID'; break;
    case 'click' :
      if(Id.className.search('moveDown') > 0){
        Id.className = Id.className.replace(' moveDown', ' moveUp')
        label.className = label.className.replace(' unMoveLabel', ' moveLabel')
        form.className = form.className.replace(' borderForm', ' noBorderForm')
      }
      if(Id.className.search('moveUp') < 0) {
        Id.className += ' moveUp'
        label.className += ' moveLabel'
        form.className += ' noBorderForm'
      }
      if (Id.value == 'ID') {
        Id.value = component.props.value
      }
      return Id.value ;break
    case 'blur' :
      if(Id.className.search('moveDown') < 0){
          Id.value = Id.value.replace(/([^0-9])/gi, '')
          Id.className = Id.className.replace(' moveUp', ' moveDown')
          label.className = label.className.replace(' moveLabel', ' unMoveLabel')
          form.className = form.className.replace(' noBorderForm', ' borderForm')
          error.className = error.className.replace(' moveError', '')
        }
        return Id.value ;break
    case 'change':
      if(/([^0-9])/gi.test(Id.value)) {
        setTimeout(()=>{ Id.value = Id.value.replace(/([^0-9])/gi, '')}, 5000)
      }
      return Id.value ;break
    case 'error':
      if(/([^0-9])/gi.test(Id.value)) {
        error.className += (error.className.search(' moveError') < 0) ? ' moveError' : ''
        return 'Aquí van solo numeros'
      }
      if(!/([^0-9])/gi.test(Id.value)) {
        console.log(!/([^0-9])/gi.test(Id.value));
        error.innerText = ''
        error.className = error.className.replace(' moveError', '')
      }
      return false ;break
    default:

  }
}
export const FieldUtils = (element, event, component) => {
  switch (element.name) {
    case 'Id': return FieldId(element, event, component); break;
    default:
      return element.value
  }
}
