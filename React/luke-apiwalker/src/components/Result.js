import React, { useEffect, useState, } from "react";
import axios from "axios";

const Result = (props) => {

  const { searchInfo, setSearchInfo } = props;
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    axios.get(`http://swapi.dev/api/${searchInfo.category}/${searchInfo.id}/`).then((response) => {
      setResponseData(response.data);
    });
  }, [searchInfo])

  return (
    <div>
      <ul>
        {Object.entries(responseData).map(([key, value]) => (
          <li className="list-unstyled mt-1">
            <span className="font-weight-bold">{key.replace("_", " ").split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}:</span>
            <span className="ml-2">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
