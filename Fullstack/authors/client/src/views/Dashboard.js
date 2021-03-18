import React, {useState , useEffect} from 'react'
import axios from "axios";
import { Link } from "@reach/router";
import DeleteButton from '../components/DeleteButton';

const Dashboard = () => {

  const [authors, setAuthors] = useState([])

  useEffect(() => {

    axios.get("http://localhost:8000/").then((res) => setAuthors(res.data))

  }, [])

  const removeFromDom = (authorId) => {
     setAuthors(authors.filter((author) => author._id != authorId));
   };

  return (
    <div className="container text-center">
      <h1>Favorite Authors</h1>
      <Link to="/new/">Add New Author</Link>
      <p>We have qoutes by: </p>
      <table className="table table-dark mt-3">
        <thead>
          <th scope="col">Author</th>
          <th scope="col">Actions Available</th>
        </thead>
        {authors.map((author, idx) => {
          return (
            <tr key={idx}>
              <td>{author.name}</td>

              <td>
                <div className="d-inline-block">
                <Link to={`/edit/${author._id}`} key={idx} className="btn btn-success">
                  Edit
                </Link>
                </div>

                <div className="d-inline-block">
                <DeleteButton
                  authorId={author._id}
                  successCallback={() => removeFromDom(author._id)}
                />
                </div>
              </td>

            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Dashboard
