import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Container, Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { EventContent } from './EventContent.tsx'

const DetailedEvent = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <>
      <DetailedImgContainer>
        <Container >
          <BackgroundContainer>
            <SubTitle>
              <BackLink to='/home'>
                <Stack direction='row' gap={1}>
                  <ArrowBackIosIcon fontSize='small' />
                  <div>Back to library</div>
                </Stack>
              </BackLink>
            </SubTitle>
            <Title>
              Walkthrough of .NET 8.0 features.
              <br /> Guide to become gigachad.
            </Title>
            <SubTitle>
              All you need to get started in web design is your desire. In the final of the online
              web design course, you will have several projects for the first portfolio and choose a
              vector for further development.
            </SubTitle>
          </BackgroundContainer>
        </Container>
      </DetailedImgContainer>
      <EventContent />
    </>
  )
}

export { DetailedEvent }

const DetailedImgContainer = styled.div`
  height: 500px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    lightgray 0px -32.234px / 100% 216% no-repeat;
`
const Title = styled.div`
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  line-height: 123.5%;
  letter-spacing: 0.25px;
`
const BackLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const SubTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.15px;
`
const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 225px;
  max-width: 600px;
`
