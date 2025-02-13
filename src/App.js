import BuggyComponent from './components/BuggyComponent';
import SlowComponent from "./components/SlowComponent";
// import ToggleButtonDialog from "./components/ToogleButtonDialog";
import DynamicScroll from './components/DynamicScroll';


function App() {
  return (
    <DynamicScroll
      content={
        <>
                 <SlowComponent />
                 <BuggyComponent />
        </>
      }
      {/* <ToggleButtonDialog /> */}
      />
  );
}

export default App;
