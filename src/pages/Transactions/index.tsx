import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
      <table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>26/09/2023</td>
          </tr>
          <tr>
            <td width="50%">Pizza</td>
            <td>R$ 12.00,00</td>
            <td>Alimentação</td>
            <td>26/09/2023</td>
          </tr>
        </tbody>
      </table>
      </TransactionsContainer>
    </div>
  )
}