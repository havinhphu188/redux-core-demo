export const addNumber = newData => ({
    type: 'ADD_NUMBER',
    addNumber: newData
  })
/* 
  this actionmsg generator will be used in mapDispatchtoProp, in container, because store dispatcher will
  not understand neither your params, or what you want it to do. All it care is actionmsg
*/
export const deleteNumber = index => ({
    type: 'DELETE_NUMBER',
    index: index
  })  