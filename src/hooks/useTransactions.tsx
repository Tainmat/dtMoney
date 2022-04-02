import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionProps {
  transactions: Transaction[];
  CreateNewTransaction: (transaction: NewTransaction) => Promise<void>;
}

type NewTransaction = Omit<Transaction, "id" | "createdAt">;

export const TransactionsContext = createContext<TransactionProps>(
  {} as TransactionProps
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function CreateNewTransaction(NewTransaction: NewTransaction) {
    const response = await api.post("/transactions", {
      ...NewTransaction,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, CreateNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
