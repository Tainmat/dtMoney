import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";

export function App() {
  return (
    <TransactionsContext.Provider value={[]}>
      <Header />
      <Dashboard />
      <TransactionTable />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
