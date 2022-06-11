import { Typography } from "antd";
import "./PageHeading.css";
const { Title, Paragraph } = Typography;

const PageHeading = () => {
  return (
    <>
      <Title level={3}>Welcome Back</Title>
      <Paragraph className='subtitle'>Ant design mode on</Paragraph>
    </>
  );
};

export default PageHeading;
