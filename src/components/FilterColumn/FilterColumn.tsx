import styled from '@emotion/styled'
import { SearchBlock } from './SearchBlock/SearchBlock.tsx'
import { CategoriesGroup } from './CategoriesGroup/CategoriesGroup.tsx'
import { EventTypeGroup } from 'components/FilterColumn/EventTypeGroup/EventTypeGroup.tsx'

const FilterColumn = () => {

  return (
    <FilterContainer>
      <SearchBlock />
      <EventTypeGroup />
      <CategoriesGroup />
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
