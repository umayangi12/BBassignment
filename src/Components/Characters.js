import React from "react";

const Characters = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>
            <h5>{item.name}</h5>
          </h1>
          <ul>
            <li>
              <strong>
                <h5>Name:</h5>
              </strong>{" "}
              <h5>{item.portrayed}</h5>
            </li>
            <li>
              <strong>
                {" "}
                <h5>Birthday:</h5>
              </strong>{" "}
              <h5>{item.birthday}</h5>
            </li>
            <li>
              <strong>
                {" "}
                <h5>Nickname:</h5>
              </strong>{" "}
              <h5>{item.nickname}</h5>
            </li>
            <li>
              <strong>
                {" "}
                <h5>Status:</h5>
              </strong>{" "}
              <h5>{item.status}</h5>
            </li>
            <br />
            <li>
              <strong>
                {" "}
                <h5>Category:</h5>
              </strong>{" "}
              <h5>{item.category}</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Characters;
