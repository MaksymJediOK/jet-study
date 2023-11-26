import { Skeleton, Stack } from '@mui/material'

const EventSkeleton = () => {
  return (
    <Stack direction='row' gap={3}>
      {[1, 2, 3].map((_, index) => {
        return <Skeleton variant='rounded' width={210} height={60} key={index} />
      })}
    </Stack>
  )
}

export { EventSkeleton }
