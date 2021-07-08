import Menu from './Menu';
import MediaPlayer from './MediaPlayer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Menu />
          <MediaPlayer />
          <img className="foot-img" src="./pics/background-banner-image-removebg-preview.png" alt=""></img>
      </div>
    </div>
  );
}

export default App;
