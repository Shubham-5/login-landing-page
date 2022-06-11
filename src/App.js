import "./App.css";
import "antd/dist/antd.css";
import React from "react";

import { Col, Row, message } from "antd";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import PageHeading from "./components/PageHeading";

function App() {
  const [token, setToken] = React.useState("");
  const onFinish = (values) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token))
      .catch((err) => console.log("Error", err));

    if (token) {
    } else {
      message.error("User not found");
    }

    setToken("");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Missing Input Value");
  };
  return (
    <div className='App'>
      <Navbar />
      <Row>
        <Col flex='auto' className='col-form'>
          <PageHeading />
          <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Col>
        <Col flex='60%' className='img-bg'>
          <img
            src='https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
            alt=' background'
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
