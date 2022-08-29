import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export async function createUser(email: string, name: string, password: string): Promise<any>{
  axios.post('https://api-user-authenticate-production.up.railway.app/user', {
   email,
   name,
   password
  })
  .then(() => {
    return toast.success('Usuário criado com sucesso')
  })
  .catch((error: AxiosError) => {
    return toast.error((error.response as any).data.message);
  });
}