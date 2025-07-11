import AppContent from "./AppContent";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Bit from "./components/CoverPages/Bit";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/bit" element={<Bit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
