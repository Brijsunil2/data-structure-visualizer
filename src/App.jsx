import Header from "./components/Header/Header";
import DataStructurePage from "./pages/DataStructurePage/DataStructurePage";
import LinkedList from "./utils/DataStructures/LinkedList/LinkedList";

const App = () => {
  const linkedList = new LinkedList();
  linkedList.test();
  
  return (
    <main className="app wrapper-width-md wrapper-width-xl">
      <Header />
      <DataStructurePage />
    </main>
  )
}

export default App