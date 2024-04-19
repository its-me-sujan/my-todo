import "./globals.css";

export const metadata = {
  title: "Todo App",
  description:
    "A simple todo app for managing daily task provides functionality for adding, editing, deleting tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  ); 
}
