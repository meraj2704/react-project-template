import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <p>Loading ............</p>;
  return (
    <div className="bg-[#F8F8FF]">
      <QueryClientProvider client={queryClient}>
        <h1>React Template</h1>
      </QueryClientProvider>
    </div>
  );
};

export default App;
