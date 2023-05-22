import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Invoices from "./scenes/invoices";
import Customer from "./scenes/customers";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import AoE from "./scenes/aoe";
import Employee from "./scenes/emplist";
import Empform from "./scenes/empform";
import AdminLogin from "./scenes/alogin";
import Login from "./scenes/elogin";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <Routes>
              <Route path="/" element={<AoE/>} />
              <Route path="/loginemp" element={<Login/>} />
              <Route path="/loginAdm" element={<AdminLogin/>} />
              <Route path="/employeedashboard" element={<Dashboard />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/empform" element={<Empform />} />
              <Route path="/emplist" element={<Employee />} />
            </Routes>
  
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
