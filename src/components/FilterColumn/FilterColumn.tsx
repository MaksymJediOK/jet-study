import styled from '@emotion/styled'
import { SearchBlock } from './SearchBlock/SearchBlock.tsx'
import { EventCard } from '../EventCard/EventCard.tsx'
const FilterColumn = () => {
  return (
    <FilterContainer>
      <SearchBlock />

      <GridContainer>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </GridContainer>
    </FilterContainer>
  )
}

export { FilterColumn }

const FilterContainer = styled.div`
  display: flex;
  gap: 24px;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(0, 272px); 
  gap: 24px;
`
