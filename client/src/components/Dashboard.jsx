import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSection from "./RightSection";
import NotFoundPage from "./NotFoundPage";
import DataForm from "./DataForm";
import DataTable from "./DataTable";
import { DataContextProvider } from "../context/DataProvider.jsx";
import { DataCatalogoContextProvider } from "../context/DataCatalogoProvider";
import { DataIngresosContextProvider } from "../context/DataIngresosProvider";
import { DataRelacionContextProvider } from "../context/DataRelacionProvider";
import DataCatalogo from "./DataCatalogo";
import CatalogoForm from "./CatalogoForm";
import DataIngresos from "./DataIngresos";
import IngresosForm from "./IngresosForm";
import DataRelacion from "./DataRelacion";
import RelacionForm from "./RelacionForm.jsx";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <DataCatalogoContextProvider>
        <DataRelacionContextProvider>
        <DataIngresosContextProvider>
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/form" element={<DataForm />} />
            <Route path="/edit/:id" element={<DataForm />} />
            <Route path="/editCatalogo/:id" element={<CatalogoForm />} />
            <Route path="/editRelacion/:id" element={<RelacionForm />} />
            <Route path="/formCatalogo" element={<CatalogoForm />} />
            <Route path="/editIngresos/:NumProg" element={<IngresosForm />} />
            <Route path="/formIngresos" element={<IngresosForm />} />
            <Route path="/data" element={<DataTable />} />
            <Route path="/dataCatalogo" element={<DataCatalogo />} />
            <Route path="/dataIngresos" element={<DataIngresos />} />
            <Route path="/dataRelacion" element={<DataRelacion />} />
            <Route path="/formRelacion" element={<RelacionForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <RightSection />
        </DataContextProvider>
        </DataIngresosContextProvider>
        </DataRelacionContextProvider>
        </DataCatalogoContextProvider>
      </div>
    </div>
  );
}

export default Dashboard;
