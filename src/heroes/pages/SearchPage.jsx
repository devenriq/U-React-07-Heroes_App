import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  const getHeroes = getHeroesByName(q);

  const showSearch = q.length === 0 ? true : false;
  const showError = q.length > 0 && getHeroes.length === 0;

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        {" "}
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1 ">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">Search a Hero</div>
          ) : (
            getHeroes.length === 0 && (
              <div className="alert alert-danger">
                There's no hero with <b>{q}</b>
              </div>
            )
          )} */}

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            There's no hero with <b>{q}</b>
          </div>

          {getHeroes.map((hero) => (
            <HeroCard
              key={hero.id}
              {...hero}
              className="animate__animated animate__fadeIn"
            />
          ))}
        </div>
      </div>
    </>
  );
};
