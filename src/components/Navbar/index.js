import { Typography, Button } from "antd";
import "./Navbar.css";
const { Title } = Typography;
const Navbar = () => {
  return (
    <div className='navbar'>
      <Title level={3}>Atools</Title>
      <div>
        <Button className='navbar-btn'>Start Free Trial</Button>
        <Button className='navbar-btn'>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
