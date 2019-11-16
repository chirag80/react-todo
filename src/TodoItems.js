import React from 'react'

class TodoItems extends React.Component {
    render() {
        const listItems = this.props.entries.map((item) => {
            return (
                <li key={item.key} onClick={() => this.props.deleteItem(item.key)} >{item.text}</li>
            )
        })
        return (
            <ul className="theList">{listItems}</ul>
        )
    }
}

export default TodoItems