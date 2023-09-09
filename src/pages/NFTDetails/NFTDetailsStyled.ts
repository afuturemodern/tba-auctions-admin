import styled from 'styled-components'

export const NFTDetailsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap:40px;
  margin-top: 150px;
  overflow: hidden;
`

export const MainNFTImage = styled.img`
  width: 100%;
  height: 70vh;
  border-radius: 20px;
  object-fit: cover;
`

export const NFTSContainer = styled.div`
  width: 40%;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
  min-height: 80vh;
`

export const EachNFTContainer = styled.div`
  width: 40%;
  height: 300px;
  border: 1px solid gray; 
  margin-top: 20px;
  border-radius: 20px;
`

export const EachNFTImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const EachNFTText = styled.p`
  font-size: 15px;
  font-weight: 600;

`

export const MainNFTAndButtonsContainer = styled.div`
  width: 40%;
  height: 80vh;
  border-radius: 20px;
  object-fit: cover;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
`

export const ActionButton = styled.button`
  width: 30%;
  height: 50px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 2%;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    color: #373737;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`

