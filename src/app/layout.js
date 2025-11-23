"use client";

import "./globals.css";
import ReduxProvider from "../store/ReduxProvider";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <ReduxProvider>
          <Sidebar />
          <div className="flex-1">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
