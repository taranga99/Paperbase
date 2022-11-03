import Sidebar from "./components/Sidebar/Sidebar";
import Authentication from "./pages/Authentication/Authentication";

const App = () => {
  return (
    <div className="text-lg flex">
      <div className="hidden sm:flex sm:min-w-[256px] h-screen">
        <Sidebar />
      </div>
      <div className="sm:w-full w-screen h-screen">
        <Authentication />
      </div>
    </div>
  );
};

export default App;
