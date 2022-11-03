import Sidebar from "./components/Sidebar/Sidebar";
import Authentication from "./pages/Authentication/Authentication";

const App = () => {
  return (
    <div className="text-lg flex">
      <div className="sm:min-w-[19%] h-screen">
        <Sidebar />
      </div>
      <div className="sm:w-[81%] w-screen h-screen">
        <Authentication />
      </div>
    </div>
  );
};

export default App;
