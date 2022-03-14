import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import Main from './components/Main';
import MobileFooter from './components/MobileFooter';


function App(){
    return(
        <div>
            <NavBar />
            <Main />
            <MobileFooter />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));