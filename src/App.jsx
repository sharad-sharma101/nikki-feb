import "./App.css";
import PageWrapper from "./component/pageWrapper";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./pages/questions";
import ResultPage from "./pages/result";

function App() {

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
