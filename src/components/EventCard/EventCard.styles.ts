import styled from '@emotion/styled'

export const CardContainer = styled.div`
  width: 355px;
  height: 272px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

export const SimpleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`
export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`
export const CardTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: 500;
  line-height: 95%;
  margin-bottom: 4px;
`
export const CardSubTitle = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
`
