import "./styles/tailwind.css";
import "./styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/ui/navbar";
import CodeEditor from "./components/ui/editor";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Navbar />
      <CodeEditor />
    </ThemeProvider>
  );
}

export default App;
