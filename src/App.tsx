import "./App.css";
import { Application } from "./components/application/application";
import { MuiMode } from "./components/mui/muiMode";
import HomePage from "./pages/homePage";
import { AppProviders } from "./providers/appProvider";

function App() {
  return (
    // <div className="App">
    //   <Application />
    //   <HomePage />
    // </div>
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
