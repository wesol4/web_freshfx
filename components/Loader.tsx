import React, { useEffect, useState } from "react";
import Loader from "./Loader"; // załaduj z odpowiedniej ścieżki
import Home from "./Home"; // Twój główny komponent

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Czas trwania animacji (np. 1.5 sekundy)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Home />;
};

export default App;