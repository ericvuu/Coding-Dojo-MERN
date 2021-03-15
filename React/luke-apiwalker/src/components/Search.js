import { navigate } from '@reach/router';
import React from 'react'

const Search = (props) => {

  const {searchInfo, setSearchInfo} = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/${searchInfo.category}/${searchInfo.id}`);
  }

  const onChangeHandler = (e) => {
    setSearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="row mt-5">
      <div className="col-sm-6 form-group">
        <div className="row">
          <label htmlFor="category" className="col-sm-4">Search For: </label>
          <select onChange={onChangeHandler} className="col-sm-8 form-control" name="category" value={searchInfo.category}>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
        </div>
      </div>

      <div className="col-sm-6 form-group">
        <div className="row">
          <div className="form-group col-sm-5 row">
            <label htmlFor="id" className="col-sm-4"> ID: </label>
            <input onChange={onChangeHandler} className="col-sm-8 form-control"  type="number" name="id" value={searchInfo.id}/>
          </div>
          <div className="form-group col-sm-7">
            <button className="col-sm-12 btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
