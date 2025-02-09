import "./App.css";
import PageWrapper from "./component/pageWrapper";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./pages/questions";
import ResultPage from "./pages/result";
import { useEffect, useState } from "react";
import loadingGif from "./helper/Flying_hearts.gif";

function App() {


    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);

    if(loading){
      return <div className="flex justify-center items-center w-screen h-screen">  
        <img src={loadingGif} style={{height: "fit-content"}} />
      </div>
    }

  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/stage/:stageNumber/questions/:questionNumber" element={<Question />} />
          <Route exact path="/result" element={<ResultPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App
