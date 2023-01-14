import { useLoaderData } from "react-router-dom"

function Show(props) {

    const book = useLoaderData()

    return (
        <div>
            <h1>{book.website}</h1>
        <h2><a href ={book.url}>{book.url}</a></h2>
        </div>
    )
  }
  


  export default Show