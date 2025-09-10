// Import components & modules
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import files
import "./css/index.css";

// Set route
import Route_home from "./page/home";
import Route_welcome from "./page/welcome";
import Route_notfound from "./page/notFound";

// App providers
function App_providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
};

// Render settings
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App_providers>
        <Suspense>
          <Routes>
            {/* Only */}
            <Route path="/" element={<Route_home />} />
            <Route path="/welcome" element={<Route_welcome />} />
            <Route path="*" element={<Route_notfound />} />
          </Routes>
        </Suspense>
      </App_providers>
    </BrowserRouter>
  </StrictMode>
);