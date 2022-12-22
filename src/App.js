import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";

import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";

import { selectDisplay } from "./redux/slices/displayCountrySlice";

import Modal from "./Components/Modal";

import { currentStatus } from "./redux/slices/loadingStateSlice";

function App() {

    const loadingStatus = useSelector(currentStatus)
    
    const potentials = useSelector(selectPotentials)
    console.log(potentials)

    const currentDisplay = useSelector(selectDisplay)
    console.log('DISPLAY',currentDisplay)

    return (
        <div className="App font-link">
            <Header />
            {loadingStatus === true && <Modal />}
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
