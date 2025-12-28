import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
 return (
<Routes>
<Route path="/" element={<Navigate to="/login" />} />
<Route path="/login" element={<Login />} />
<Route
       path="/admin"
       element={
<ProtectedRoute>
<Admin />
</ProtectedRoute>
       }
     />
</Routes>
 );
};
export default App;
