interface Add {
  (a: number, b: number): number;
}

export const add: Add = (a, b) => {
  return a + b;
}

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 500)
  })
}

export const fetchError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 500)
  })
}


export const fetchCb = cb => {
  setTimeout(() => {
    cb('success')
  }, 500)
}