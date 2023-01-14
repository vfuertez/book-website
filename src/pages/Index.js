import { Link, useLoaderData, Form } from "react-router-dom"

function Index(props) {
    const book = useLoaderData()


   return (
   <div>
   <h2>List A Book</h2>
      <Form action="/create" method="post">
        <input type="input" name="website" placeholder="Book Title" />
        <input type="input" name="url" placeholder="url" />
        <input type="submit" value="List a book" />
      </Form>


   {book.map(book => (
    <div key={book._id} className="book">
      <Link to={`/${book._id}`}>
        <h1>{book.website}</h1>
      </Link>
      
    </div>
  ))}
</div>
)
}
  
  export default Index