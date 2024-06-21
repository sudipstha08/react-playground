import { proxy } from 'valtio'
import { ISpellStore } from '../interfaces'

export const spellStore = proxy<ISpellStore>({
  currentSpell: '',
  setCurrentSpell(id: null | string) {
    this.currentSpell = id
  },
})
