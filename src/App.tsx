import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/layout";
const MainPage = lazy(() => import("@/views/MainPage"));
const FeedPage = lazy(() => import("@/views/FeedPage"));
const RegisterPage = lazy(() => import("@/views/RegisterPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading.....</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
