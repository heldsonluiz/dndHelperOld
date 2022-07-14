import spellList from '~/data/spells'
import weaponsList from '~/data/weapons'
import armorsList from '~/data/armors'
import packagesList from '~/data/packages'

export default function loadData () {
  localStorage.setItem('spellList', JSON.stringify(spellList))
  localStorage.setItem('weaponsList', JSON.stringify(weaponsList))
  localStorage.setItem('armorsList', JSON.stringify(armorsList))
  localStorage.setItem('packagesList', JSON.stringify(packagesList))
  localStorage.setItem('money', 0)
}
