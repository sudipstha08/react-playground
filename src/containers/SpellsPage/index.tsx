import { FC } from 'react'
import { Header, Spells, Window } from '@/components'
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const SpellsPage: FC = () => {
  // eslint-disable-next-line no-console
  console.log(dayjs.utc().format())
  return (
    <main className="dark:bg-[#0B1120] h-lvh">
      <Header />
      <Spells />
      <Window />
    </main>
  )
}
