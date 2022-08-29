import { ContactUs } from "../components/ContactUs";

export interface UsersCollections {
  name: string;
  email: string;
}
const HomePage: React.FC = () => {
  return (
    <ContactUs />
  )
};

export default HomePage;
