import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSection from "./RightSection";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <MainContent />
        <RightSection />
      </div>
    </div>
  );
}

export default Dashboard;
