import './App.css';
import FullName from './component/profile/FullName';
import ProfilePhotos from './component/profile/ProfilePhotos';
import Address from './component/profile/Address';

function App() {
  return (
  <>
  <div className="main">
  <FullName />
  <ProfilePhotos />
  <Address />
  </div>
  </>
  );
}

export default App;
