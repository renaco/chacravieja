import styled from "styled-components";

export const NextArrow = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
  height: 45px;
  margin-top: -40px;
  background-color: #D63500;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.941 1.333l10.373 8.57L.94 17.568' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 10;
  right: 10px;
  &:before {
    content: '';
  }
`

export const PrevArrow = styled.div`
  width: 45px;
  display: flex;
  align-items: center;
  height: 45px;
  margin-top: -40px;
  background-color: #D63500;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.059 17.666L1.686 9.098 12.06 1.43' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 10;
  left: 10px;
  &:before {
    content: '';
  }
`

export const SliderContent = styled.div`
  width: 100% !important;
  margin-bottom: 1em;
`

export const SliderContentLogo = styled.div`
  display: flex;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-items: center;
`

export const SliderContentTitle = styled.h5`
  font-family: 'Rokkitt';
  font-size: 24px;
  color: #797979;
  margin-top: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`
