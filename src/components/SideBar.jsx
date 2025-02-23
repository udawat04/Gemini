import { useState } from "react";
import {assets} from "../assets/assets";

const SideBar = () => {

    const [extended,setExtended] = useState(false);

  return (
    <>
      <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] pl-4 ">
        <div className="top">
          <img
          onClick={()=>setExtended(!extended)}
            className="menu w-5 block ml-2.5 cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />
          <div className="new-chat cursor-pointer inline-flex mt-[50px] items-center gap-2.5 py-2.5 px-4 bg-[#e6eaf1] rounded-[50px] text-sm text-gray-600">
            <img className="w-[18px]" src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>

            {extended ? <div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-5 ">Recent</p>
            <div className="recent-entry flex  gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e6eaf1] ">
              <img className="w-5" src={assets.message_icon} alt="" />
              <p>what is react...</p>
            </div>
          </div>
          :
          null
          }
          

        </div>

        <div className="bottom flex flex-col text-sm">
          <div className="bottom-item flex  gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e6eaf1]">
            <img className="w-5" src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
          </div>
          <div className="bottom-item flex  gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e6eaf1]">
            <img className="w-5" src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
          </div>
          <div className="bottom-item flex  gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e6eaf1]">
            <img className="w-5" src={assets.setting_icon} alt="" />
            {extended ?<p>Settings</p>:null}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar