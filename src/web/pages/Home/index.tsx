import { memo, useEffect } from 'react';
import { Container } from './style';
import Header from '@components/Header';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="w-full bg-[#1a2239]">
        <Container className="flex h-620 justify-between items-center w-1280 m-auto text-[#1a2239]">
          <div className="w-586">
            <div className="w-586 xl:text-[3.75rem] leading-[1.2] text-[#fff]">
              The DNS <span className="text-[#03AB55]">BRIDGE</span> for web2 to web3.
            </div>
            <div className="w-586 h-64 xl:text-[1.25rem] text-[#AEB0B4]">
              Decentralized and Native DNS Service for both Web2 and Web3.
            </div>
          </div>
          <img className="w-586" src="/public/home_big_img.png" />
        </Container>
      </div>
    </>
  );
};
export default memo(Home);
