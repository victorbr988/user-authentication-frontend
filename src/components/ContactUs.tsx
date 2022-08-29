import { FiMail, FiPhoneCall, FiMapPin, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'
export const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col pt-4 items-center bg-gray-900/75 text-white font-semibold">
      <section className='flex flex-col p-4 gap-8'>
        <h1 className='text-3xl text-center'>Contate o desenvolvedor</h1>
        <section className=' flex flex-col gap-4'>
          <a 
            target='_blank'
            className='flex gap-5 hover:border-blue-400 border-2 border-transparent p-5 rounded-lg  items-center'
            href="https://wa.me/5581996717343">
            <FiPhoneCall className='text-blue-400 text-lg' />
            +55 (81) 99671-7343
          </a>
          <a 
            target='_blank'
            className='flex gap-5 hover:border-blue-400 border-2 border-transparent p-5 rounded-lg items-center'
            href="#">
            <FiMail className='text-blue-400 text-lg' />
            gabrielvghs666@gmail.com
          </a>
          <a 
            target='_blank'
            className='flex gap-5 hover:border-blue-400 border-2 border-transparent p-5 rounded-lg  items-center'
            href="https://www.google.com/maps/place/Caruaru+-+Picada,+Caruaru+-+PE/@-8.1875808,-36.1562529,11z/data=!3m1!4b1!4m5!3m4!1s0x7a98b96e8d7fd6d:0xa30a5c7c9e363ef5!8m2!3d-8.2753735!4d-35.9735057">
            <FiMapPin className='text-blue-400 text-lg' />
            Brasil - Pernambuco
          </a>
        </section>
        <section className='flex mt-10 justify-center gap-8'>
          <a
            className='flex transition-colors hover:bg-blue-500 bg-gray-800 p-4 rounded-full'
            href="https://linkein.com/in/victor-gabriel-dev">
            <FiLinkedin className='text-lg' />
          </a>
          <a
            className='flex transition-colors hover:bg-blue-500 text-lg bg-gray-800 p-4 rounded-full'
            href="https://www.instagram.com/gab_ulquiorrasbtn/">
            <FiInstagram className='text-lg'  />
          </a>
          <a
            className='flex transition-colors hover:bg-blue-500 bg-gray-800 p-4 rounded-full'
            href="https://github.com/victorbr988">
            <FiGithub className='text-lg'  />
          </a>
        </section>
      </section>

    </div>
  );
};
