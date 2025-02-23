import { useContext } from "react";
import { assets } from "../assets/assets"
import { Context } from "../context/Context";


const Chat = () => {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  console.log(">>1",loading)

  return (
    <>
      <div className="main flex-[1] h-screen pb-[15vh] relative">
        <div className="nav flex items-center justify-between text-2xl p-5 text-[#585858]">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" className="w-10 rounded-[50%]" />
        </div>
        <div className="main-container max-w-[900px] m-auto">
          {!showResult ? (
            <>
              <div className="greet my-[30px] text-6xl text-[#c4c7c5] font-medium p-5 ">
                <p className="text-center">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(16deg, #4b90ff, #ff5546)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Hello, Sudarshan
                  </span>
                </p>
              </div>
              <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Suggest beautiful places to see onan upcoming road trip
                  </p>
                  <img
                    className="w-[35px] p-2.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                    src={assets.compass_icon}
                    alt=""
                  />
                </div>
                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Briefly summarize this concept: urban planning
                  </p>
                  <img
                    className="w-[35px] p-2.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                    src={assets.bulb_icon}
                    alt=""
                  />
                </div>
                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Brainstorm team bonding activites for our work retreat
                  </p>
                  <img
                    className="w-[35px] p-2.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                    src={assets.message_icon}
                    alt=""
                  />
                </div>
                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                  <p className="text-[#585858] text-[17px]">
                    Improve the redability of the following code
                  </p>
                  <img
                    className="w-[35px] p-2.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                    src={assets.code_icon}
                    alt=""
                  />
                </div>
              </div>
            </>
          ) : (
            <div
              className="result pb-5 px-[5%] max-h-[70vh] overflow-y-scroll"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="result-title my-10 flex items-center gap-5 ">
                <img
                  className="w-10 rounded-[50%]"
                  src={assets.user_icon}
                  alt=""
                />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data flex items-start gap-5">
                <img className="w-10" src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader w-full flex flex-col gap-2.5">
                    <hr
                      className=" rounded-[4px] border-none h-5 w-full animate-pulse"
                      style={{
                        background:
                          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                        backgroundSize: "800px 50px",
                        animation: "loader 3s infinite linear",
                      }}
                    />
                    <hr
                      className="rounded-[4px] border-none h-5 w-full animate-pulse"
                      style={{
                        background:
                          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                        backgroundSize: "800px 50px",
                        animation: "loader 3s infinite linear",
                      }}
                    />
                    <hr
                      className="rounded-[4px] border-none h-5 w-full animate-pulse"
                      style={{
                        background:
                          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                        backgroundSize: "800px 50px",
                        animation: "loader 3s infinite linear", 
                      }}
                    />
                  </div>
                ) : (
                  <p className="text-[17px] leading-[1.9]" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] px-5 m-auto">
            <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-2.5 px-5 rounded-[50px]">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="flex-[1] border-none outline-none bg-transparent  p-2 text-[18px]"
                type="text"
                placeholder="Enter a promp here"
              />
              <div className="flex items-center gap-4 ">
                <img
                  className="w-6 cursor-pointer"
                  src={assets.gallery_icon}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={assets.mic_icon}
                  alt=""
                />
                <img
                  onClick={() => onSent()}
                  className="w-6 cursor-pointer"
                  src={assets.send_icon}
                  alt=""
                />
              </div>
            </div>
            <p className="bottom-info text-sm my-4 mx-auto text-center font-normal  ">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loader {
          0% {
            background-position: -800px 0px;
          }
          100% {
            background-position: 800px 0px;
          }
        }
      `}</style>
    </>
  );
  
}

export default Chat


