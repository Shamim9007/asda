import Image from 'next/image'

const Header = () => {
  return (
    <header className="mb-5 flex items-center gap-8">
      <Image
        className="rounded-xl"
        src="/Photo.jpg"
        alt="me"
        width="150"
        height="170"
      />

      <div className="flex w-3/4 flex-col gap-2 text-white">
        <h1 className="text-3xl font-bold tracking-wide ">Shamim Akhtar</h1>
        <h3 className="font-semibold text-cyan-500">
          Systems Engineer - Tata Consultancy Services
        </h3>
        <p className="text-sm">
          I have worked in multi-faceted roles with multiple technologies. They
          have provided me with the opportunity to work with a wide variety of
          skills and have enhanced my professional experience. I am a strong
          believer in incorporating modern technology with Design thinking to
          better suit the customer of tomorrow.
        </p>
      </div>
    </header>
  )
}

export default Header
