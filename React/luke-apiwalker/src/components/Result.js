import React, { useEffect, useState, } from "react";
import axios from "axios";

const Result = (props) => {

  const { searchInfo, setSearchInfo } = props;
  const [responseData, setResponseData] = useState('');
  const [responseError, setResponseError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/${searchInfo.category}/${searchInfo.id}/`)
      .then((response) => {
        setResponseData(response.data);
        setResponseError(false);
      })
      .catch((error) => {
        setResponseError(true);
      });
  }, [searchInfo])

  return (
    <div>

      {responseError ?
        <>
        <h2 className="display-3 text-center mt-3">"These aren't the droids you're looking for" </h2>
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/obi.jpg`}  alt="logo"/>
        </>
        :

      <ul>
        {Object.entries(responseData).map(([key, value]) => (
          <li className="list-unstyled mt-1">
            <span className="font-weight-bold">{key.replace("_", " ").split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}:</span>
            <span className="ml-2">{value}</span>
          </li>
        ))}
      </ul>

      }
    </div>
  );
};

export default Result;
