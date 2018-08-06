export const addNumber = newData => ({
    type: 'ADD_NUMBER',
    addNumber: newData
  })

export const deleteNumber = index => ({
    type: 'DELETE_NUMBER',
    index: index
  })  