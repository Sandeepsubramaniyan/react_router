import {render} from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";

const rootElement = document.getElementById("root");
render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
       
      </BrowserRouter>, 
      rootElement
);
