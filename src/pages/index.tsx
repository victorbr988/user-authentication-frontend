import { useState } from 'react';
import { SectionLoginUser } from '../components/sectionLoginUser'
import { createUser } from '../utils/createUser';
import { ContactUs } from '../components/ContactUs';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleSubmit(): Promise<any>{
    try{
      await createUser(email, password, name)
      setName('')
      setEmail('')
      setPassword('')
    } catch(error: any) {
      return error.message
    }
  }

  return (
    <div className="min-h-screen w-full justify-around items-center lg:flex-row flex flex-col  bg-gray-900">
      <main className='flex flex-col gap-8 lg:w-[500px] w-full justify-center items-center h-full'>
        <h2 className='text-white text-3xl'>User Signup</h2>
        <form className="p-8 w-full rounded bg-white flex flex-col">
          <section className='w-full px-10 flex flex-col gap-3 justify-center min-h-full'>
            <h2 className="text-2xl my-0 mx-auto text-gray-900">Cadastre-se</h2>
            <SectionLoginUser
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              name={name}
              email={email}
              password={password}
            />
            <button
              // disabled={validity()}
              onClick={ handleSubmit } className='bg-blue-600 mt-4 disabled:brightness-75 p-2 rounded text-white text-lg' type='button'
              >
                Enviar
              </button>
          </section>
        </form>
      </main>
      <ContactUs />
    </div>
  )
}

export default Home;
