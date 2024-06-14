import { Login } from './Login';
import {
  MainpageContainer,
  TextWrapper,
  GridContainer,
  ImgItem
} from "./StyledComponents";

export const Mainpage = () => {
  return (
    <MainpageContainer>
      <TextWrapper>
        <h1>Welcome to the party!</h1>
        <h2>We give a party for you!Come to join us!</h2>
      </TextWrapper>
      <GridContainer>
        <ImgItem>
          <img src="https://cdn.prod.website-files.com/643cf9faa943e80deaf8e151/6630bc128773d82b4c592752_Sastaholm_kostymforrad-%20(4)-min.gif" alt="hat-image"></img>
        </ImgItem>
        <ImgItem>
          <img src="https://cdn.prod.website-files.com/643cf9faa943e80deaf8e151/6630bc12d1baaf071766f4a3_Sastaholm_kostymforrad-%20(3)-min.gif" alt="hat-image"></img>
        </ImgItem>
        <ImgItem>
          <img src="https://cdn.prod.website-files.com/643cf9faa943e80deaf8e151/6630bc1139699c2e2020103f_Sastaholm_kostymforrad-%20(1)-min.gif" alt="hat-image"></img>  
        </ImgItem>
        <ImgItem>
          <img src="https://cdn.prod.website-files.com/643cf9faa943e80deaf8e151/6630bc12b0e665979929eeed_Sastaholm_kostymforrad-%20(2)-min.gif" alt="hat-image"></img>  
        </ImgItem>
        <ImgItem>
          <img src="https://cdn.prod.website-files.com/643cf9faa943e80deaf8e151/6630bc125d8e3849264a4da1_Sastaholm_kostymforrad-%20(5)-min.gif" alt="hat-image"></img>  
        </ImgItem>
        <ImgItem>
          <img src="https://cdn.prod.website-files.com/643cf9faa943e80deaf8e151/6630bc1211deb164a93623bf_Sastaholm_kostymforrad-%20(6)-min.gif" alt="hat-image"></img>  
        </ImgItem>
      </GridContainer>
      <Login/>
    </MainpageContainer>
  )
}