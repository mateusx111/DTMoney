import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { pricerFormat } from '../../utils/formatters'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <>
      <SummaryContainer>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#0085FF" />
          </header>
          <strong>{pricerFormat.format(summary.income)}</strong>
        </SummaryCard>
        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68 " />
          </header>
          <strong>{pricerFormat.format(summary.outcome)}</strong>
        </SummaryCard>
        <SummaryCard variant="blue">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{pricerFormat.format(summary.total)}</strong>
        </SummaryCard>
      </SummaryContainer>
    </>
  )
}
