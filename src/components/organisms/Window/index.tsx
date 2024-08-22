import { CSSProperties, FC } from 'react'
import { FixedSizeList as List } from 'react-window'

const Row = ({
  index,
  style,
  isScrolling,
}: {
  index: number
  style: CSSProperties
  isScrolling?: boolean
}) => <div style={style}>{isScrolling ? 'Scrolling' : `Row ${index}`}</div>

export const Window: FC = () => {
  return (
    <div className="flex gap-3">
      <List
        height={150}
        itemCount={10000}
        itemSize={35}
        width={300}
        useIsScrolling
      >
        {Row}
      </List>
      <div className="h-[300px]  w-[300px] max-h-[300px] overflow-scroll border border-purple-800">
        {[...new Array(1000).fill(Math.random())].map((item, idx) => (
          <div className="p-3" key={idx}>
            <div>Hello {item}</div>
            <img
              height={100}
              width={100}
              src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            />
            <div>{idx}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
