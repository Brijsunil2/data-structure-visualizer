import Header from "./components/Header/Header";
import DataStructurePage from "./pages/DataStructurePage/DataStructurePage";
import Array from "./utils/dataStructures/array/array";

const App = () => {
  const array = new Array();
  
  return (
    <main className="app wrapper-width-md wrapper-width-xl">
      <Header />
      <DataStructurePage />
    </main>
  )
}

export default App