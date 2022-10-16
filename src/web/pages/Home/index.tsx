import { memo, useEffect } from "react";
import Button from "@mui/material/Button";
import {
  Container,
  Content,
  Slogan,
  SloganDesc,
  getStartBtn,
  DownLoadDeck,
} from "./style";
import { useNavigate } from "react-router-dom";
import { MenuRouteConfig } from "@constants/MenuRouteConfig";
import Header from "@components/Header";

function Home() {
  // const navigate = useNavigate();
  useEffect(() => {}, []);
  // const handleGoDaoLists = () => {
  //   navigate(MenuRouteConfig?.daoLists?.route);
  // };
  return (
    <>
      <Header />
      <Container className="flex flex-col justify-center items-center w-full">
        <Content className="w-full h-292 flex flex-col justify-between items-center">
          Cambio
        </Content>
      </Container>
    </>
  );
}
export default memo(Home);
