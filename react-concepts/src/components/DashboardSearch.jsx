import { useEffect, useState } from "react";
import axios from "axios";

const DashboardSearch = () => {
  const [apiData, setApiData] = useState([]); 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setApiData(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardSearch;