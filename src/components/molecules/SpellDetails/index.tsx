import { FC, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Rate, Spin, Typography } from 'antd'
import { spellStore } from '@/store'
import { useSpell } from '@/queries'

const { Paragraph } = Typography

const RowRenderer = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="each-item flex ">
      <div className="title min-w-[100px] font-semibold pr-2">{name}</div>
      <div className="value">{value}</div>
    </div>
  )
}

const SpellDetails: FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { currentSpell } = useSnapshot(spellStore)
  const { data: spellData, isLoading } = useSpell({
    enabled: !!currentSpell,
    spellId: currentSpell as string,
  })

  if (isLoading) {
    return (
      <section className="text-center">
        <Spin size="large" className="mt-10" />
      </section>
    )
  }

  return (
    <div className="">
      <div className="each-item flex ">
        <div className="title font-semibold pr-2 min-w-[100px]">
          Description
        </div>
        <div className="value">
          <Paragraph
            ellipsis={{
              rows: 4,
              expandable: 'collapsible',
              expanded,
              onExpand: (_, info) => setExpanded(info.expanded),
            }}
            title={`${spellData?.desc}`}
          >
            {spellData?.desc}
          </Paragraph>
        </div>
      </div>
      <RowRenderer name={'Range'} value={spellData?.range as string} />
      <RowRenderer name={'Duration'} value={spellData?.duration as string} />
      <RowRenderer
        name={'Casting Time'}
        value={spellData?.casting_time || '-'}
      />
      <RowRenderer name={'School'} value={spellData?.school?.name as string} />
      <Rate
        defaultValue={spellData?.level}
        count={10}
        disabled
        value={spellData?.level}
        className="pt-2"
        allowClear={false}
      />
    </div>
  )
}

export default SpellDetails
