import { QueryFunction } from '@tanstack/react-query'
import { ISpell } from '../interfaces'
import { API } from '../lib'

export const fetchSpells: QueryFunction<{
  count: number
  results: ISpell[]
}> = async () => {
  return await API.get(`/spells`, {
    params: {},
  })
}

export const fetchSpell: QueryFunction<ISpell> = async ({ queryKey }) => {
  const spellId = queryKey?.[1]
  return await API.get(`/spells/${spellId}`, {})
}

export const spellService = {
  fetchSpells,
  fetchSpell,
}
