
//nested state causes a lot of issues with standard state in react
//wanted to stick with no redux just because i found it much less complex than if i were to try to also implement redux
const handleOnChange = (propertyName, parentProp) => (event) => {
  this.setState({
    [parentProp]: {
      ...this.state[parentProp],
      [propertyName]: event.target.value
    }
  })

}

const handleDoubleNestedOnChange = (propertyName, parentProp, grandParentProp) => (event) => {
  this.setState({
    [grandParentProp]: {
      ...this.state[grandParentProp],
      [parentProp]: {
        ...this.state[parentProp],
        [propertyName]: event.target.value
      }
    }
  })
}

const handleTripleNestedOnChange = (propertyName, parentProp, grandParentProp, greatGrandParentProp) => (event) => {
  this.setState({
    [greatGrandParentProp]: {
      ...this.state[greatGrandParentProp],
      [grandParentProp]: {
        ...this.state[grandParentProp],
        [parentProp]: {
          ...this.state[parentProp],
          [propertyName]: event.target.value
        }
      }
    }
  })

}

export default { handleOnChange, handleDoubleNestedOnChange, handleTripleNestedOnChange }