
import { FaBuilding, FaTasks, FaSearch } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { RiRobot2Fill } from "react-icons/ri";


const Features = () => {
  return (
    <section id="features" className="bg-white  font-Raleway pb-10">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-8xl tracking-tight font-Raleway text-black">
          Features
        </h2>
        <p className="font-light text-black lg:mb-8 sm:text-xl px-4 md:px-0">
          Discover how we are enhancing your experience with our innovative
          features. Explore below to see how we are transforming the way you.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <FaBuilding
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-6 py-4">
            <h6 className="text-white text-s font-bold text-center ">
            Company Profiles 
            </h6>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-300"
          style={{ width: "200px", height: "200px" }}
        >
          <FaTasks 
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-2 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Project & Task Management
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <GiReceiveMoney
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-2 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Tender Bidding System
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <FaSearch
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Search & Discovery 
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          < AiFillStar
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Ratings & Reviews 
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <BsChatDots 
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Real-Time Communication
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <BiGlobe
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-5 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Marketing Website
            </h3>
          </div>
        </div>
        <div
          className="max-w-xs mx-2 my-4 bg-gray-800 shadow-xl rounded-xl overflow-hidden transform hover:translate-y-[-2px] transition duration-250"
          style={{ width: "200px", height: "200px" }}
        >
          <RiRobot2Fill
            className="text-innovastruct-400"
            style={{
              width: "180px",
              height: "130px",
              paddingTop: "25px",
              paddingLeft: "30px",
            }}
          />
          <div className="px-6 py-4">
            <h3 className="text-white text-s font-bold mb-2 text-center">
            Future AI Chatbot Integration 
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;