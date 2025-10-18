import { useEffect, useState } from "react";
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


const DashboardSearch = () => {
  const navigate = useNavigate()
  const [apiData, setApiData] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setApiData(response.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(searchValue)
  return (
    <div>
      <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column' }}>
        <h3>Search Here</h3>
        <InputText
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            width: '200px', padding: '8px 12px',
            borderRadius: '6px',
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
          {apiData.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        label="Home"
        onClick={() => navigate('/')}
        style={{
          padding: '12px 20px',
          margin: '10px',
          marginLeft: '100px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'

        }}
      />
    </div>
  );
};

export default DashboardSearch;