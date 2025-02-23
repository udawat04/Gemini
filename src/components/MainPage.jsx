import Chat from "./Chat";
import SideBar from "./SideBar";




const MainPage = () => {
  return (
    <div className="flex">
    <SideBar/>
    <Chat/>
    </div>
  );
}

export default MainPage