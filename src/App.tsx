import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./hooks/useTransactions";

export function App() {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <TransactionTable />
      <GlobalStyle />
    </TransactionProvider>
  );
}
