import { ThemeProvider } from "./components/theme-provider";
import RouterApp from "./routes/RouterApp";

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterApp />
      </ThemeProvider>
    </>
  );
}

export default App;