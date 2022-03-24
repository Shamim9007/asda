import {
  MailIcon,
  LocationMarkerIcon,
  DeviceMobileIcon,
} from '@heroicons/react/outline'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaMicrosoft,
  FaJsSquare,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMicrosoftazure,
  SiMicrosoftsharepoint,
} from 'react-icons/si'

const skillsArr = [
  { icon: FaReact, title: 'React JS' },
  { icon: FaHtml5, title: 'HTML 5' },
  { icon: FaCss3Alt, title: 'CSS' },
  { icon: FaJsSquare, title: 'Javascript' },
  { icon: SiTailwindcss, title: 'Tailwind CSS' },
  { icon: SiNextdotjs, title: 'Next JS' },
  { icon: FaMicrosoft, title: 'Power Apps' },
  { icon: FaMicrosoft, title: 'Power Automate' },
  { icon: SiMicrosoftsharepoint, title: 'Sharepoint' },
  { icon: SiMicrosoftazure, title: 'MS Azure' },
]

const LeftSection = () => {
  return (
    <div className="mb-5 w-1/4 bg-gray-800">
      <div className="mb-2 mt-3 flex flex-col">
        <h1 className="flex text-2xl font-bold tracking-wide text-cyan-500">
          CONTACT
        </h1>
      </div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2 text-white">
          <div className="rounded-full bg-white p-1">
            <DeviceMobileIcon className="h-5 w-5 text-cyan-800" />
          </div>
          <p className="text-xs">+91-9051347768</p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <div className="rounded-full bg-white p-1">
            <MailIcon className="h-5 w-5 text-cyan-800" />
          </div>
          <p className="text-xs">shamimdj.akhtar@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <div className="rounded-full bg-white p-1">
            <LocationMarkerIcon className="h-5 w-5 text-cyan-800" />
          </div>
          <p className="text-xs">Whitefield, Bangalore</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex flex-col">
          <h1 className="flex text-2xl font-bold tracking-wide text-cyan-500">
            SKILLS
          </h1>
        </div>

        <div className="flex flex-wrap justify-between">
          {skillsArr.map((Skill) => (
            <div
              key={`Skill-${Skill.title}`}
              className="h-15 mb-1 flex w-20 flex-col items-center justify-center gap-1 rounded-md border p-0.5 text-center font-bold text-white"
            >
              <Skill.icon className="text-xl" />
              <h1 className="text-xs">{Skill.title}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex flex-col">
          <h1 className="flex text-2xl font-bold tracking-wide text-cyan-500">
            EDUCATION
          </h1>
        </div>

        <div className="flex flex-col flex-wrap justify-between">
          <p className="text-xs font-semibold text-white">
            MS in Aerospace Engineering
          </p>
          <p className="text-xs text-white">
            University of Illinois, Urbana-Champaign, USA
          </p>
          <p className="text-xs text-white">2016-2018</p>

          <p className="mt-3 text-xs font-semibold text-white">
            B-Tech in Mechanical Engineering
          </p>
          <p className="text-xs text-white">Amrita University, Kollam, India</p>
          <p className="text-xs text-white">2012-2016</p>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
