import styled from '@emotion/styled'
import { SearchBlock } from './SearchBlock/SearchBlock.tsx'
import { CategoriesGroup } from './CategoriesGroup/CategoriesGroup.tsx'
import { ControlledRadioButtonsGroup } from 'components/FilterColumn/FormatGroup/FormatGroup.tsx'

const FilterColumn = () => {
  return (
    <FilterContainer>
      <SearchBlock />
      <CategoriesGroup />
      <ControlledRadioButtonsGroup />
    </FilterContainer>
  )
}

export { FilterColumn }

const FilterContainer = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
