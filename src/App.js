import './App.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function App() {
  const slideImages = [
    'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
    'https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg',
    'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
  ];
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}} alt={slideImages[0]}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}} alt={slideImages[1]}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}} alt={slideImages[3]}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default App;