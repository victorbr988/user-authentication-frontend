import React, { ChangeEvent } from 'react';

interface LoginProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  name: string,
  email: string,
  password: string,
}

export const SectionLoginUser: React.FC<LoginProps> = ({
  setName,
  setEmail,
  setPassword,
  name,
  email,
  password,
}) => {

  function handleSubmitName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  function handleSubmitEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }
  function handleSubmitPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  return (
    <section className="lg:w-full flex flex-col">
      <label className="text-gray-900" htmlFor='name'>
        Nome
      </label>
      <input
        id='name'
        className="text-gray-900 rounded p-2 text-md  border-2 border-gray-900"
        type='text'
        value={name}
        onChange={handleSubmitName}
        required
      />
      <label className="text-gray-900" htmlFor='email'>
        E-mail
      </label>
      <input
        id='email'
        className="text-gray-900 rounded p-2 text-md  border-2 border-gray-900"
        type='email'
        value={email}
        onChange={handleSubmitEmail}
        required
      />
      <label className="text-gray-900" htmlFor='password'>
        Senha
      </label>
      <input
        id='password'
        className="text-gray-900 rounded p-2 text-md  border-2 border-gray-900"
        type='password'
        value={password}
        onChange={handleSubmitPassword}
        required
      />
    </section>
  );
};
