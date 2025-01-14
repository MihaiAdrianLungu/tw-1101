import store from '../stores/TaskStore'

function Task (props) {
  let { item } = props
  const [ isEditable, setIsEditable ] = useState(false)
  const [ description, setDescription ] = useState(item.description)
  const [ priority, setPriority ] = useState(item.priority)

  return (
    <div>
      {
        isEditable ? (
          <div>
           {/* TODO */}
           {/* <button value='save'>save</button>
           <input type='button' value='save'/> */}
          </div>
        ) : (
          <div>
           {/* TODO */}
          </div>
        )
      }
    </div>
  )

}

export default Task
