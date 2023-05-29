import { Routes,Route,BrowserRouter} from "react-router-dom";
import Users from "./Routes/Users";
function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route path="/*" element={<Users/>}> </Route>
</Routes>
</BrowserRouter>

</>
  );
}

export default App;
