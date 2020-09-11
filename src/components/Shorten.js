import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/Loader";

const Shorten = () => {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(data);
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  const handleSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    if (value === "") {
      setWarning(true);
      return;
    }
    setWarning(false);
    setLoading(true);
    fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: value }),
    })
      .then((res) => res.json())
      .then((response) => {
        setData([...data, { ...response, btn: false, id: uuidv4() }]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  const handleCopy = (btn) => {
    navigator.clipboard.writeText(`https://rel.ink/${btn.hashid}`);
    console.log("copying!");
    const id = btn.id;
    console.log(id);
    const newData = data.map((item) => {
      if (item.id === id) {
        console.log("hello");
        item.btn = true;
        return item;
      } else {
        item.btn = false;
        return item;
      }
    });

    setData(newData);
  };

  return (
    <>
      <form className="shorten" onSubmit={handleSubmit}>
        <div className="shorten__wrapper">
          <div
            className={
              warning
                ? "shorten__container shorten__warning"
                : "shorten__container"
            }
          >
            <input
              type="search"
              className={
                warning ? "shorten__search shorten__warn" : "shorten__search"
              }
              placeholder="Shorten a link here..."
              onChange={handleChange}
            />
          </div>

          <input
            type="submit"
            className="shorten__submit "
            value="Shorten it!"
          />
        </div>
      </form>
      {error ? (
        <div className="shorten__error">Sorry Something went wrong!</div>
      ) : null}
      {loading ? <Loader /> : null}

      {data.length > 0 ? (
        <ul className="results">
          {data.map((item) => {
            return (
              <li className="results__listitem" key={item.id}>
                <div className="results__item">{item.url}</div>

                <a
                  className="results__item results__link"
                  href={`https://rel.ink/${item.hashid}`}
                >{`https://rel.ink/${item.hashid}`}</a>

                <button
                  className={
                    item.btn
                      ? " results__item results__btn--copy results__btn--copied"
                      : "results__btn--copy  results__item"
                  }
                  onClick={() => handleCopy(item)}
                >
                  {item.btn ? "Copied!" : "Copy"}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Shorten;
