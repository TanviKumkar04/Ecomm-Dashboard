import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const metadata = {
  title: "Ecommerce Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
