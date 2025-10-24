import { useEffect, useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import RedirectHome from "./RedirectHome";

const DashboardSearch = () => {
  const [apiData, setApiData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setApiData(response.data);
        // setFilteredData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const value = searchValue;
    const filtered = value
      ? apiData.filter(
          (obj) =>
            obj.name.toLowerCase().includes(value) ||
            obj.username.toLowerCase().includes(value)
        )
      : apiData;

    setFilteredData(filtered);
  }, [searchValue, apiData]);

  return (
    <div>
      <div style={{ marginLeft: "90px", display: "flex", flexDirection: "column" }}>
        <h3>Search Here</h3>
        <InputText
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            width: "200px",
            padding: "8px 12px",
            borderRadius: "6px",
          }}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.username}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginLeft: "90px" }}>
        <RedirectHome />
      </div>
    </div>
  );
};

export default DashboardSearch;