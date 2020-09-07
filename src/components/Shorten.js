import React, { useState } from "react";

const Shorten = () => {
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  const handleSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    if (value === "") {
    }
    fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: value }),
    })
      .then((res) => res.json())
      .then((response) => {
        setData([...data, response]);
      });
  };

  return (
    <>
      <form className="shorten" onSubmit={handleSubmit}>
        <div className="shorten__wrapper">
          <input
            type="search"
            className="shorten__search"
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          <input
            type="submit"
            className="shorten__submit "
            value="Shorten it!"
          />
        </div>
      </form>
      {data.length > 0 ? (
        <ul className="results">
          {data.map((item) => {
            return (
              <li className="results__item">
                <div className="results__url">{item.url}</div>

                <div className="results__linkshort">
                  <a
                    href={`https://rel.ink/${item.hashid}`}
                  >{`https://rel.ink/${item.hashid}`}</a>
                  <button className="results__btn ">Copy</button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Shorten;
