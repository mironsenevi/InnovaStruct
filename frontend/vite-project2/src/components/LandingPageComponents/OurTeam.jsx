import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const OurTeam = () => {
  return (
    <section id="ourteam" className="bg-white font-Raleway">
      <div className="py-6 sm:py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-6 sm:mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl sm:text-6xl md:text-8xl tracking-tight font-Raleway text-black">
            Our Team
          </h2>
          <p className="font-light text-black mb-6 lg:mb-16 text-sm sm:text-xl px-2 sm:px-4">
            Our team comprises dedicated individuals committed to driving
            innovation and excellence in every aspect of our work.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {/* Team Member Cards */}
          {[
             {
              name: "Mohamed Aroos Mohamed Adil",
              image: "/assets/aadil.jpg",
              linkedin: "https://www.linkedin.com/in/aadilaroos/",
              role: " The Visionary Leader & Frontend Expert ",
              description: "Driving innovation with leadership and code.",
              social: {
                instagram:"https://www.instagram.com/aadilaroos?igsh=eDRmcm4xd2s3NTM2&utm_source=qr",
                github: "https://github.com/AdilAroos",
               
              }
            },
            {
              name: "Omindu Abeywardane",
              image: "../assets/omindu.jpg",
              linkedin: "https://www.linkedin.com/in/omindu-abey/",
              role: " UI/UX Innovator & Frontend Craftsman ",
              description: "Shaping seamless user experiences with creativity.",
              social: {
                instagram:"https://www.instagram.com/_omen.do_/profilecard/?igsh=MXZ0b3NzZjlvZ3owcA==",
                github: "https://github.com/omen-do-abey",
                
              }
            },
            {
              name: "Miron Senevirathna",
              image: "../assets/miron.jpg",
              linkedin: "https://www.linkedin.com/in/miron-senevirathna-0b729a275/",
              role: " Full-Stack Developer & Problem Solver ",
              description: "Building dynamic solutions from front to back.",
              social: {
                instagram:"https://www.instagram.com/mironsenevi?igsh=MTBkM2RveDVmd2s2NA==",
                github: "https://github.com/mironsenevi",
                
              }
            },
            {
              name: "Dinaya Yuhansi",
              image: "../assets/dinaya.jpg",
              linkedin: "https://www.linkedin.com/in/dinaya-juwan-wadu/",
              role: " Frontend Developer & Marketing Strategist ",
              description: "Bridging tech and storytelling for impact.",
              social: {
                instagram:"https://www.instagram.com/din.y_/",
                
                github: "https://github.com/DinayaJW",
                
              }
            },
            {
              name: "Saiganeshwaran Thillainathan",
              image: "../assets/saiganesh.jpg",
              linkedin: "https://www.linkedin.com/in/saiganeshwaran-thillainathan-9828012b4/",
              role: " Frontend Enthusiast & Marketing Guru ",
              description: "Bringing brands to life with design and strategy.",
              social: {
                instagram:"https://www.instagram.com/saiganeshwaran_3/",
                
                github: "https://github.com/SaiGaneshWaran",
                
              }
            },
            {
              name: "Dulain Perera",
              image: "../assets/dulain.jpg",
              linkedin: "https://www.linkedin.com/in/dulain-perera-091778292/",
              role: "Backend Architect & Data Maestro ",
              description: "Powering robust systems behind the scenes.",
              social: {
                instagram:"https://www.instagram.com/dulain_03/",
                
                github: "https://github.com/dulainperera",
               
              }
            }
            // ... Add other team members data here
          ].map((member, index) => (
            <div key={index} className="items-center bg-gray-800 rounded-lg shadow flex flex-col sm:flex-row">
              <a href={member.linkedin} className="w-full sm:w-2/5">
                <img
                  className="w-full aspect-square object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.image}
                  alt={`${member.name} image`}
                />
              </a>
              <div className="p-4 sm:p-5 w-full sm:w-3/5">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  <a href={member.linkedin}>{member.name}</a>
                </h3>
                <span className="text-sm sm:text-base text-gray-500">{member.role}</span>
                <p className="mt-2 sm:mt-3 mb-3 sm:mb-4 text-sm sm:text-base font-light text-gray-400">
                  {member.description}
                </p>
                <ul className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                  {Object.entries(member.social).map(([platform, url], idx) => (
                    <li key={idx}>
                      <a
                        href={url}
                        className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                      >
                        {platform === 'instagram' && <FaInstagram size={16} sm={{size: 20}} />}
                        {platform === 'linkedin' && <FaLinkedin size={16} sm={{size: 20}} />}
                        {platform === 'github' && <FaGithub size={16} sm={{size: 20}} />}
                        {platform === 'website' && <FaGlobe size={16} sm={{size: 20}} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          {/* Repeat the same structure for other team members */}
          {/* Copy the above card structure for each team member */}
          
        </div>
      </div>
    </section>
  );
};

export default OurTeam;