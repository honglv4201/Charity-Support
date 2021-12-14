import { HomePage } from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import { DonatePage } from "./pages/donatepage/DonatePage";
import { PayPage } from "./pages/paypage/PayPage";
import { PayCompletePage } from "./pages/paypage/PayCompletePage";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Volunteer } from "./pages/homePage/VolunteerPage";
import { FaqPage } from "./pages/homePage/FaqPage";
import { AnaLysicItem } from "./pages/analysic/AnalysicItem";
import { AnalysicStatement } from "./pages/analysic/AnalysicStatement";
import { AnalysicUser } from "./pages/analysic/AnalysicUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/paying" element={<PayPage />} />
        <Route path="/paying-complete" element={<PayCompletePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* link  */}
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/analysic" element={<AnaLysicItem />} />
        <Route path="/user" element={<AnalysicUser />} />
        <Route path="/statement" element={<AnalysicStatement />} />
      </Routes>
    </div>
  );
}

export default App;
