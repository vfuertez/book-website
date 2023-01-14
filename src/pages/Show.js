import { useLoaderData, Form } from "react-router-dom"

function Show(props) {

    const book = useLoaderData()

    return (
        <div>
            <h1>{book.website}</h1>
        <h2><a href ={book.url}>{book.url}</a></h2>




        <h2>Update {book.website}</h2>
      <Form action={`/update/${book._id}`} method="post">
        <input type="input" name="website" placeholder="website" />
        <input type="input" name="url" placeholder="url" />
        <input type="submit" value="update" />
      </Form>
        </div>
    )
  }
  


  export default Show