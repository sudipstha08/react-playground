import { FC, lazy, useCallback, useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Result, Spin } from 'antd'
import _ from 'lodash'
import { SpellCard } from '@/components'
import { useSpells } from '@/queries'
import { spellStore } from '@/store'
import { SESSION_KEY } from '@/constants'
import { CustomModal } from '@/components'

const SpellDetails = lazy(() => import('../../molecules/SpellDetails'))

export const Spells: FC = () => {
  const { data: spellsData, error, isLoading } = useSpells({ enabled: true })
  const { currentSpell } = useSnapshot(spellStore)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [spellCount, setSpellsCount] = useState(20)
  const [favSpells, setFavSpells] = useState<string[]>([])

  useEffect(() => {
    if (currentSpell) {
      setIsModalOpen(prevState => !prevState)
    }
  }, [currentSpell])

  useEffect(() => {
    const favItems =
      JSON.parse(localStorage.getItem(SESSION_KEY) as string) || []
    favItems && setFavSpells(favItems)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(prevState => !prevState)
    spellStore.setCurrentSpell(null)
  }, [])

  const onCountClick = () => {
    setSpellsCount(prevCount =>
      prevCount === 20 ? (spellsData?.spells?.length as number) : 20,
    )
  }

  if (isLoading) {
    return (
      <section className="bg-no-repeat dark:bg-[#0B1120] min-h-[85.8vh] text-center">
        <Spin size="large" className="mt-10 pt-[20vh]" />
      </section>
    )
  }

  if (error) {
    return (
      <div>
        <Result
          status="403"
          title="Error occured"
          subTitle="Error occured. Please try again later"
        />
      </div>
    )
  }

  return (
    <>
      <section className="bg-no-repeat dark:bg-[#0B1120] min-h-[87.4vh] pb-10 pr-10 pl-10">
        <h3 className="text-6xl text-white text-center pt-10 mb-12">Spells</h3>
        <div className="m-auto max-w-[1480px]">
          <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spellsData?.spells?.slice(0, spellCount).map(spell => {
              return (
                <SpellCard
                  key={spell.id}
                  id={spell.id as string}
                  name={spell.name}
                  desc={spell.desc}
                  level={spell.level}
                  isFav={favSpells.includes(spell.id as string)}
                />
              )
            })}
          </div>
        </div>
        <div className="mt-5 text-center">
          <button
            className="dark:bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCountClick}
          >
            {spellCount === 20 ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <CustomModal
        title={_(_.capitalize(currentSpell as string)).replace('-', ' ')}
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <SpellDetails />
      </CustomModal>
    </>
  )
}
