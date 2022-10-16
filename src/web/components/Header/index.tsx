import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuRouteConfig,
  MenuRouteConfigType,
} from "@constants/MenuRouteConfig";
import {
  TopHeader,
  Slogan,
  RightBtn,
  walletButtonStyle,
  Content,
} from "./style";
import {
  NetworkType,
  BeaconEvent,
  defaultEventCallbacks,
} from "@airgap/beacon-sdk";
import ConnectWallet from "@components/ConnectWallet";
import { getCurretnRoute } from "@utils/getCurrentRoute";
import { useAtom } from "jotai";
import { store } from "@store/jotaiStore";
import { StoreType } from "@type/index";
import { useImmer } from "@hooks/useImmer";

const Header = () => {
  const navigate = useNavigate();

  return (
    <TopHeader>
      <Content></Content>
    </TopHeader>
  );
};
export default Header;
