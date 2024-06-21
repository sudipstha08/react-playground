import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="px-4 py-6 mb-0 bg-no-repeat">
      <div className="container flex justify-between max-w-1200 m-auto">
        <img src="/assets/imgs/dnd3.png" width="200" alt="logo" />
        <h1 className="text-5xl text-slate-400 font-concert">
          Dungeons & Dragons
        </h1>
      </div>
    </header>
  )
}
