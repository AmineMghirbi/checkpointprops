import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';
import Profilev2 from './Components/Profile/Profilev2';

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
      <Profilev2 fullName="Amine" bio="BIO" profession="JOB" handleName={handleName}>
        /logo192.png
      </Profilev2>
    </div>
  );
}

export default App;
