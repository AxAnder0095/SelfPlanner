import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TestPage } from "./pages/TestPage.tsx";
import { Overview } from "./pages/Overview.tsx";
import { Priority } from "./pages/Priority.tsx";
import { Ongoing } from "./pages/Ongoing.tsx";
import { Finished } from "./pages/Finished.tsx";

export const router = createBrowserRouter([
    {path: "/", element: <App />,
        children: [
            {index: true, element: <Overview />},
            {path: "test", element: <TestPage />},
            {path: "priority", element: <Priority />},
            {path: "ongoing", element: <Ongoing />},
            {path: "finished", element: <Finished />},
        ]
    },
])