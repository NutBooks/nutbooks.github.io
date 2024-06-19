import { useNavigate } from 'react-router-dom';
import mainGif from '../assets/main.gif';
import Footer from '../components/\bFooter.jsx';
import Header from '../components/Header.jsx';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="hero min-h-[calc(100vh-72px)]">
        <div className="hero-content flex-col gap-8 lg:flex-row">
          <img src={mainGif} className="max-w-full rounded-lg shadow-2xl sm:max-w-sm" />
          <div>
            <h1 className="text-4xl font-bold">핵심만 읽어보세요!</h1>
            <p className="py-6">
              &quot;다음에 읽어야지!&quot; 하며 저장했지만 읽지 않은 채 너무 많아진 북마크,
              <br />
              핵심만 요약해서 알려드릴게요!
            </p>
            <div className="text-center sm:ml-8 sm:text-left">
              <button type="button" className="btn btn-primary px-12" onClick={() => navigate('/list')}>
                시작하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;
