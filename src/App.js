import TableCompContainer from "./components/TableCompContainer.js";
import UpdateTableContainer from "./components/UpdateTableContainer.js"
import DelTableContainer from "./components/DelTableContainer.js"
import { createStore } from "redux";
import { Provider } from "react-redux";
import { addReducer } from "./store/reducers.js";

const store = createStore(addReducer);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <div className="title">
          <h1>Сохраненниые чеки</h1>
          <div className="title-left"><UpdateTableContainer /></div>
        </div>
        <div className="title-right"><DelTableContainer /></div>
        <TableCompContainer />
      </div>
    </Provider>
  );
}

export default App;
