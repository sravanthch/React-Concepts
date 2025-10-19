import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const RedirectHome = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Button
                label="Home"
                onClick={() => navigate('/')}
                style={{
                    padding: '12px 20px',
                    margin: '10px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'

                }}
            />
        </div>
    )
}

export default RedirectHome
