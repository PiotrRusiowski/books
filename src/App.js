import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        getTopReatedMove();
    }, []);
    const getTopReatedMove = () => {
        axios
            .get("http://localhost:3001/api/books/"
            )
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    };
    return (
        <div className="App">
            <h1>jestem</h1>
        </div>
    );
}

export default App;
