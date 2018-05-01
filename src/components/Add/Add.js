import IconMore from '../Icons/more'
import { styleAdd } from './styles'

const Add = (props) => (
  <button
    onClick={props.handleAdd}
    className={props.className}
    >
    <IconMore
      size={26}
      color='#788895'
    />
    <style jsx>{styleAdd}</style>
  </button>
)

export default Add
