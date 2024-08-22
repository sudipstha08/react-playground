import { FC } from 'react'
import { Header, Spells, Window } from '@/components'

export const SpellsPage: FC = () => {
  return (
    <main className="dark:bg-[#0B1120] h-lvh">
      <Header />
      <Spells />
      <Window />
    </main>
  )
}
