//import logo from "../Images/logo-t.png";
import { useEffect } from "react";
import Posts from "./Posts";
import SharePosts from "./SharePost";
import User from "./User";
import {  Row, Col } from "reactstrap"; //import the Reactstrap Components
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const {isLogin} = useSelector(state => state.users)
  const navigate = useNavigate()

  useEffect(()=>{
    console.log("home component")
    if(!isLogin) navigate("/login")
  },[])

  
  return (
    <>
      <Row>
        <Col md={3}>
          <User />
        </Col>
        <Col md={9}>
          <SharePosts />
        </Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <Posts />
        </Col>
      </Row>
    </>
  );
};

export default Home;
