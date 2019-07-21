import React from "react";
import { Link } from "react-router-dom";
import { test } from "fuzzyjs";
import { json } from "./data";

const transformData = () => {
  return Object.keys(json).map(key => {
    const obj = { ...json[key] };
    obj.id = key;
    return obj;
  });
};

const resultTrue = (props) => {

}

class Search extends React.Component {
  state = {
    results: []
  };

  search = e => {
    const { value } = e.target;
    const data = transformData();
    const results = data.filter(result => {
      return value && test(value, result.t);
    });

    this.setState({
      results
    });
  };

  render() {
    const { results } = this.state;
    return (
          <div className="container"> 
              <form id="form" method="POST" name="finding" className="form">
                  <div className="form-wrapper">
                      <input id="search" className="search" type="search" placeholder="Введите вопрос" name="sub" onChange={this.search}/>
                      <button className="submit" type="submit"><img className="search-icon--xs" alt="search" src="/img/sprites/intermediate-svg/search.svg"></img><span className="search-text">Поиск</span></button>
                      <button id="reset" className="reset" type="reset"><i className="fas fa-times reset-icon"></i><span className="reset-text--style">отменить поиск</span></button>
                      <div id="hint"></div>
                  </div>
                  <h1 className="searchResult">Результаты поиска «<span id="errmsg"></span>»‎</h1>

                  {results.map(result => (
          <div id="result" className="result" key={result.id}>
            <h2 className="result-title">{result.t}</h2>
            <p className="result-desc">{result.d}</p>
            <Link className="result-link" to={`/inner/${result.id}`}>{result.u}</Link>
          </div>
        ))}
              </form>
          </div>
    );
  }
}

export default Search;
