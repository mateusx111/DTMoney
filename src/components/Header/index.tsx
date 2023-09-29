import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay />

              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>
              </Dialog.Content>
            </Dialog.Portal>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
