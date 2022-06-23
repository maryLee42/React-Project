
//css - import 순서 중요!!  // 
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';
import './css/style.css';

// 공지사항 import
import Notice from './pages/board/notice.js';
import Banner from './pages/board/Banner.js';


function App() {
  return(
    <Notice></Notice>
    <Banner></Banner>
  );
}

export default App;
