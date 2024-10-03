import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <div className="list_text" key={item.id}>
          <Link to={`/user/detail/${item.id}`}>
            <h1 className="text">{item.name}</h1>
          </Link>
          <p className="text_1">{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
