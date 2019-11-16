import React from 'react'
import './App.test'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    }
    this.inputElement = React.createRef()
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({ currentItem })
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items,
        currentItem: { text: '', key: '' }
      })
    }
  }

  deleteItem = (key) => {
    const filterdItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filterdItems
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} inputElement={this.inputElement}
          handleInput={this.handleInput} currentItem={this.state.currentItem} />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App