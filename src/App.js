import { Provider } from "react-redux";
import store from "./redux/store";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </div>
  );
}

export default App;
