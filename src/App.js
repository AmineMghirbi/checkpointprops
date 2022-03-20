import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';

function App() {
  const handleName=(name)=>{
    console.log(name);
    alert(`This is the the bio of ${name}`);
  }

  return (
    <div className='App-container'>
      <Profile fullName="Amine Mghirbi" bio="BIO" profession="JOB" handleName={handleName}>
        <img src='/logo192.png' alt='alternative'/>
      </Profile>
    </div>
  );
}

export default App;
