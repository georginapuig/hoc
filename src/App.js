import './App.css';
import Loader from './Loader';
import User from './User';

function App() {
  const UserLoader = Loader(User);

  return (
    <div className='App'>
      <UserLoader />
    </div>
  );
}

export default App;
