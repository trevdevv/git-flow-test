// const fetchData = callback => {
//   setTimeout( () => {
//     // eslint-disable-next-line standard/no-callback-literal
//     callback ({ text: 'Complete Code Example' })
//   }, 2000)
// }

// fetchData(todo => {
//   console.log(todo.text)
// })

// console.log("This is the first output");

const getTodo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error)
        resolve({ text: 'peanut butter' })
      else
        reject()
    }, 2000)
  })
}

getTodo()
    .then(todo => {
        console.log(todo.text)
    })
    .catch(error => {
        console.log(`${error}: Error occurred`)
    })



module.exports = getTodo;