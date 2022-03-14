import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import Corpo from './Corpo';
import Rodape from './Rodape';


function App(){
    return(
        <div>
            <NavBar />
            <Corpo />
            <Rodape />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));