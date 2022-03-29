import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { ModalTransaction } from "../ModalTransaction";
import { Container, Content } from "./styles";

export function Header() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModal(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
        <ModalTransaction
          isOpen={newTransactionModal}
          onRequestModalNewTransactionClose={handleCloseNewTransactionModal}
        />
      </Content>
    </Container>
  );
}
