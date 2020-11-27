import { Title, Masonry, Stone } from "../ui";

const imgs = [
  "https://cdn.vox-cdn.com/thumbor/t1PqH832nto6YQjdbGDZSbIkdn4=/0x203:2446x1426/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19353661/critical_role.png",
  "https://images-na.ssl-images-amazon.com/images/I/91UI63p1aEL.jpg",
  "https://ksr-ugc.imgix.net/assets/024/180/681/20b0b3846c5175714b0cf75822d46e00_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1550868442&auto=format&frame=1&q=92&s=70491da5dbacc53d43cd232ea7f21033",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Critical_Role_logo%2C_from_social_media_2020.jpg/250px-Critical_Role_logo%2C_from_social_media_2020.jpg",
  "https://i2.wp.com/www.theilluminerdi.com/wp-content/uploads/2020/06/critical-role-cast.jpg?resize=1280%2C640&ssl=1",
  "https://static.wikia.nocookie.net/criticalrole/images/f/fe/116CuriousBeginnings.jpg/revision/latest?cb=20180122223258",
  "https://static.wikia.nocookie.net/criticalrole/images/b/b7/167FeralBusiness.jpg/revision/latest/window-crop/width/400/x-offset/0/y-offset/0/window-width/1200/window-height/675?cb=20190225203739",
  "https://i.pinimg.com/originals/78/64/7c/78647c68fb642ad23d3f0fb9cbc55bda.jpg",
  "https://cnet3.cbsistatic.com/img/ccibLGBtXnVbgAQM_D4pOcMwFXA=/940x0/2019/03/08/872778c3-e5c0-4866-aa1a-0485458eb696/vox1.jpg",
  "https://thehardtimes.net/wp-content/uploads/2018/12/criticalrole.jpg",
];

export default function Home() {
  return (
    <main>
      <Title>Actu à la une</Title>
      <Masonry>
        {imgs.map((url) => {
          return (
            <Stone>
              <img src={url} alt="" />
            </Stone>
          );
        })}
      </Masonry>

      <Title>Autour de moi</Title>
    </main>
  );
}
