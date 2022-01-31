import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="navbar">
        navbar
      </div>
      <div className='App-body'>
        <div className='App-sub-body'>
          <p className='centered'>
            Matthew Molitor<br></br>software developer
          </p>
        </div>
        <div className='App-sub-body2'>
          <p className='centered'>
            <img src = {process.env.PUBLIC_URL + 'images/placeholder.jpg'} alt ='placeholder male profile picture' height={'300'} width={'300'}/>
          </p>
        </div>
      </div>
      <div className='App-footer'>
        <a href='https://github.com/MatthewMolitor'><img src = {process.env.PUBLIC_URL + 'images/github.png'} alt='github logo' height={'50'} width={'50'}/></a>
        <a href='https://www.linkedin.com/in/matthewemolitor/'><img src = {process.env.PUBLIC_URL + 'images/linkedin.png'} alt='linkedin logo' height={'50'} width={'50'}/></a>
      </div>
      </header>
    </div>
  );
}

export default App;
