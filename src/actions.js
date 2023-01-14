import { redirect } from 'react-router-dom'

const URL = 'https://book-api-q5e1.onrender.com'

/// Create ////
export const createAction = async ({ request }) => {
  const formData = await request.formData()

  const newBook = {
    website: formData.get('website'),
    url: formData.get('url'),
  }
  await fetch(URL + '/book', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
  return redirect('/')
}

//// Update ////

export const updateAction = async ({request, params}) => {
    // get data from form
    const formData = await request.formData()
    // set up our new person to match schema
    const updatedBook = {
        website: formData.get("website"),
        url: formData.get("url"),
    }
    // Send new person to our API
    await fetch(URL + "/book/" + params.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedBook)
    })
    // redirect to index
    return redirect("/")
}