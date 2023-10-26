import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSection from "./RightSection";
import NotFoundPage from "./NotFoundPage";
import DataForm from "./DataForm";
import DataTable from "./DataTable";
import { DataContextProvider } from "../context/DataProvider.jsx";
import { DataCatalogoContextProvider } from "../context/DataCatalogoProvider";
import DataCatalogo from "./DataCatalogo";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <DataCatalogoContextProvider>
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/form" element={<DataForm />} />
            <Route path="/edit/:id" element={<DataForm />} />
            <Route path="/data" element={<DataTable />} />
            <Route path="/dataCatalogo" element={<DataCatalogo />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <RightSection />
        </DataContextProvider>
        </DataCatalogoContextProvider>
      </div>
    </div>
  );
}

export default Dashboard;
