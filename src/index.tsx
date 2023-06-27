import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import './_cloner/assets/css/index.css'

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
