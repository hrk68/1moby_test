import img from './image-baner.svg';
import logo from './logo.svg';
import './Styles/App.css';
import Form from './Components/loginForm';

function App() {
  return (
    <div className="App">
      <div className="logo"><img className="img-res" src={logo} alt=""/></div>
      <div className="container left">
        <div className="banner">
          <div>
            <h1>ลงทะเบียนและทดลองใช้ Datatech ฟรี</h1>
            <p>พร้อมที่จะเพิ่มรายได้จากลูกค้าที่มีอยู่แล้วหรือยัง สร้างและปรับแต่ง<br/>โปรแกรมในไม่กี่นาที และเริ่มเพิ่มมูลค่าตลอดช่วงชีวิตของลูกค้าวันนี้</p>
          </div>
          <figure><img className="img-res" src={img} alt=""/></figure>
       </div>

      </div>
      <div className="container">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
