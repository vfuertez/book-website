const URL = "https://book-api-q5e1.onrender.com"

export const bookLoader = async () => {
  const response = await fetch(URL + "/book")
  const page = await response.json()
  return page
}

export const selectedBook = async ({params}) => {
    const response = await fetch(URL + "/book/" + params.id )
    const thisBook = await response.json()
    return thisBook
}