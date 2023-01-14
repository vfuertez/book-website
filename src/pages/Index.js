import { Link, useLoaderData } from "react-router-dom"

function Index(props) {
    const book = useLoaderData()


   return book.map(book => (
    <div key={book._id} className="book">
      <Link to={`/${book._id}`}>
        <h1>{book.website}</h1>
      </Link>
      <h3><a href={book.url}>Url</a></h3>
    </div>
  ))
}
  
  export default Index