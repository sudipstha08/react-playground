import { useQuery } from '@tanstack/react-query'
import { spellService } from '@/services'
import { ISpell } from '@/interfaces'

/**
 * @param enabled => query enable/disabled boolean
 * @returns useQuery response
 */
export const useSpells = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['FetchSpells'],
    queryFn: spellService.fetchSpells,
    enabled: enabled,
    refetchOnWindowFocus: false,
    retry: 1,
    select: response => {
      return {
        count: response.count,
        spells: response?.results?.map((spell: ISpell) => {
          return {
            key: spell?.index,
            id: spell?.index,
            desc: spell?.desc,
            name: spell?.name,
            level: spell?.level,
          }
        }),
      }
    },
  })
}

/**
 * @param enabled => query enable/disabled boolean
 * @returns useQuery response
 */
export const useSpell = ({
  enabled,
  spellId,
}: {
  enabled: boolean
  spellId: string
}) => {
  return useQuery({
    queryKey: ['FetchSpellNyId', spellId],
    queryFn: spellService.fetchSpell,
    enabled: enabled,
    refetchOnWindowFocus: false,
    retry: 1,
  })
}
