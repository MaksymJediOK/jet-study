import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

export const Heading = styled(Element)`
  color: rgba(0, 0, 0, 0.87);
  font-size: 24px;
  font-weight: 500;
  line-height: 133.4%;
  margin: 0;
`
export const TextContent = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
`
export const ContentContainer = styled.div`
  max-width: 605px;
`

export const DetailedImgContainer = styled.div`
  height: 500px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    lightgray 0px -32.234px / 100% 216% no-repeat;
`
export const Title = styled.div`
  color: #fff;
  font-size: 34px;
  font-weight: 700;
  line-height: 123.5%;
  letter-spacing: 0.25px;
`
export const BackLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const SubTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.15px;
`
export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 225px;
  max-width: 600px;
`
export const InfoTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 24px;
  font-weight: 500;
  line-height: 133.4%;
`
export const DateText = styled.div`
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: 123.5%;
  letter-spacing: 0.25px;
`
export const InfoSubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: 0.15px;
  text-transform: capitalize;
`
