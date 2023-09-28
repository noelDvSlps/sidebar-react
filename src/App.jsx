import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Analytics } from "./pages/Analytics";
import { SidebarProvider } from "./providers/sidebarProvider";
import { Comment } from "./pages/Comment";
import { Product } from "./pages/Product";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
