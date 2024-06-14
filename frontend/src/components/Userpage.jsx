import {
  UserpageContainer,
  ImgContainer,
  InfoContainer,
} from "./StyledComponents";

export const Userpage = () => {
  return (
    <UserpageContainer>
      <h1>🌲🎶 The lastest party is ...🎶🌲</h1>
      <ImgContainer>
       <img src="https://www.sourcecode.nu/wp-content/uploads/2017/03/Tomorrowland.png" alt="concert-image"></img>
      </ImgContainer>
      <InfoContainer>
        <h4>Time : 22:00 Saturday</h4>
        <h4>Address : Forest in Archipelogo</h4>
        <h4>Dresscode : Mask On </h4>
      </InfoContainer>
    </UserpageContainer>
  )
}
