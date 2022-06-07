import "./App.css";
import Router from "./components/Router/Router";
import Navigation from "./components/Navigation/Navigation";


const App = () => {
    // useEffect(() => {
    //     getTopReatedMove();
    // }, []);
    // const getTopReatedMove = () => {
    //     axios
    //         .get("http://localhost:3001/api/books/"
    //         )
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => console.log(err))
    // };
    return (
        <div className="App">
            <Navigation/>
            <Router/>
        </div>
    );
};

export default App;
