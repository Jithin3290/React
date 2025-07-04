
import './App.css'
import { Suspense, lazy } from "react";
import { AuthProvider } from "./Customhook/AuthContext";

const Dashboard = lazy(() => import("./Customhook/Dashboard"));
function App() {


  return (
    <>
      <AuthProvider>
      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <Dashboard />
      </Suspense>
      </AuthProvider>
   
        
    </>
  )
}

export default App
