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

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()
  const updatedBook = {
    website: formData.get('website'),
    url: formData.get('url'),
  }
  await fetch(URL + '/book/' + params.id, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBook),
  })
  return redirect('/')
}

///// Delete ////

export const deleteAction = async ({ params }) => {
  await fetch(URL + '/book/' + params.id, {
    method: 'delete',
  })

  return redirect('/')
}
