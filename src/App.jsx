import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { mockApiUsage, mockUser } from "./mockData";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const timeoutId = setTimeout(() => {
        setApiData(mockApiUsage);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <Dashboard user={mockUser} apiData={apiData} />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}
