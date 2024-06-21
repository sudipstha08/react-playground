import { FC, useCallback, useState } from 'react'
import { Rate, Tooltip } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { ISpell } from '@/interfaces'
import { spellStore } from '@/store'
import { SESSION_KEY } from '@/constants'

type ICard = ISpell & { isFav?: boolean; id: string }

export const SpellCard: FC<ICard> = ({ id, name, level, isFav = false }) => {
  const [isFavourite, setIsFavourite] = useState(isFav)

  const onCardClick = useCallback<
    React.MouseEventHandler<HTMLDivElement>
  >(() => {
    spellStore.setCurrentSpell(id)
  }, [id])

  const handleFavClick = useCallback<
    React.MouseEventHandler<HTMLSpanElement>
  >(() => {
    setIsFavourite(prevVal => !prevVal)
    const favItems =
      JSON.parse(localStorage.getItem(SESSION_KEY) as string) || []

    if (isFavourite) {
      const filteredFavItems = favItems.filter((item: string) => item !== id)
      localStorage.setItem(SESSION_KEY, JSON.stringify(filteredFavItems))
    } else {
      favItems.push(id)
      localStorage.setItem(SESSION_KEY, JSON.stringify(favItems))
    }
  }, [isFavourite, id])

  return (
    <div
      className="flex flex-col bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 cursor-pointer"
      onClick={onCardClick}
    >
      <div className="flex justify-between">
        <div className="text-slate-300 font-semibold text-sm">{name}</div>
        <span onClick={e => e.stopPropagation()}>
          <Rate
            tooltips={[isFavourite ? 'Remove from Favourite' : 'Favourite']}
            character={
              isFavourite ? (
                <HeartFilled
                  style={{ color: 'red' }}
                  onClick={handleFavClick}
                />
              ) : (
                <HeartOutlined onClick={handleFavClick} />
              )
            }
            count={1}
            defaultValue={1}
          />
        </span>
      </div>
      <Tooltip placement="topLeft" title={'Spell Level'}>
        <Rate
          defaultValue={level}
          count={10}
          disabled
          value={level}
          className="pt-2"
          allowClear={false}
        />
      </Tooltip>
    </div>
  )
}
