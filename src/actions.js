import { redirect } from 'react-router-dom'

const URL = 'http://localhost:4006'

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
