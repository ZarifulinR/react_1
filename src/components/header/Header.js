import logo from '../../logo.svg';
import './Header.css';
function Header() {
    let title= "Introduction to React"
    return (
        <heder className= "App-heder" >
            <img src={logo} className="App-logo" alt="logo" />
            <hi> {title} </hi>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </heder>
    )
}
export default Header;