import IconMore from '../Icons/more'
import { styleAdd } from './styles'

const Add = (props) => (
  <button
    onClick={props.handleAdd}
    className={props.className}
    >
    +
    <style jsx>{styleAdd}</style>
  </button>
)

export default Add
