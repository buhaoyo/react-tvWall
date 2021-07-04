// import logo from './logo.svg';
import './Head.css';
const d = new Date()
const date = d.getFullYear()+"."+(d.getMonth()+1)+"."+d.getDate()
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         
          
            {date}
        
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header> 
    </div>
  );
}

export default App;
