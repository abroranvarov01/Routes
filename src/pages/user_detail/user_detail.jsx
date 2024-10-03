import React from "react";
import { useParams } from "react-router-dom";

const User_detail = () => {
  const param = useParams();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${param.userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="containert">
      <div className="list_textt">
        <h1 className="textt">{user?.name}</h1>
        <p className="text_1t">{user?.email}</p>
        <p className="text_1t">{user?.phone}</p>
        <p className="text_1t">{user?.website}</p>
      </div>
    </div>
  );
};

export default User_detail;
