import { memo, useEffect } from 'react';
import gsap from 'gsap';
import { Container } from './style';
import Header from '@components/Header';

function FirstSlide(): JSX.Element {
  useEffect(() => {
    gsap.fromTo('#slogan', { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, duration: 1 });
  }, []);
  return (
    <Container className="flex h-620 justify-between items-center w-1280 m-auto text-[#1a2239]">
      <div id="slogan" className="w-586">
        <div className="w-586 xl:text-[3.75rem] leading-[1.2] text-[#fff]">
          The DNS <span className="text-[#03AB55]">BRIDGE</span> for web2 to web3.
        </div>
        <div className="w-586 h-64 xl:text-[1.25rem] text-[#AEB0B4]">
          Decentralized and Native DNS Service for both Web2 and Web3.
        </div>
      </div>
      <img className="w-586" src="/public/home_big_img.png" />
    </Container>
  );
}

function Features(): JSX.Element {
  useEffect(() => {
    let count = 0;
    const gsapCallback = () => {
      if (count >= 2) return;
      if (count === 1) {
        gsap.fromTo(
          '#feature-items',
          { autoAlpha: 1, y: 100, opacity: 0 },
          { autoAlpha: 1, y: 0, duration: 1, opacity: 1 }
        );
      }
      count++;
    };
    const options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(gsapCallback, options);
    const target = document.querySelector('#feature-items') as HTMLElement;
    observer.observe(target);
  }, []);

  // const featureBg = '/public/feature_bg.png';
  const features: { icon: string; title: string; desc: string }[] = [
    {
      icon: 'public/feature1.png',
      title: 'Web2 Compatible',
      desc: 'Full Support of L3-L7 network service,  include Native DNS, DoT and DoH.',
    },
    {
      icon: 'public/feature2.png',
      title: 'Web3 Based',
      desc: 'Built-in Web3 Support, Connect your web3 assets via immune DNS system.',
    },
    {
      icon: 'public/feature3.png',
      title: 'Zero Paid',
      desc: 'Free of Charge, for everyone and forever.',
    },
    {
      icon: 'public/feature4.png',
      title: 'Easy Use',
      desc: 'simple setup without wallet required.',
    },
  ];

  return (
    <div className="h-315 w-1280 m-auto bg-[#212B46]">
      <div className="uppercase text-[#ffe102] mb-[0.35em] pt-[64px] text-[1rem] bold text-center">
        feature
      </div>
      <div className="flex" id="feature-items">
        {features.map(item => {
          return (
            <div key={item.title} className="flex flex-1 flex-col items-center">
              <div className="w-60 h-60 mb-[1rem] rounded-[30px] bg-[#233847] flex justify-center items-center">
                <img className="w-24 h-24" src={item.icon} />
              </div>
              <div className="text-[1.25rem] text-[#fff] mb-[7px]">{item.title}</div>
              <div className="text-[#aeb0b4] text-[1rem] leading[1.5] text-center pr-[16px]">
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tech(): JSX.Element {
  useEffect(() => {
    let count = 0;
    const gsapCallback = () => {
      if (count >= 2) return;
      if (count === 1) {
        gsap.fromTo(
          '#tech_left',
          { autoAlpha: 1, x: -200, opacity: 0 },
          { autoAlpha: 1, x: 0, duration: 0.7, opacity: 1 }
        );
        gsap.fromTo(
          '#tech_right',
          { autoAlpha: 1, x: 200, opacity: 0 },
          { autoAlpha: 1, x: 0, duration: 0.7, opacity: 1 }
        );
      }
      count++;
    };
    const options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(gsapCallback, options);
    const target = document.querySelector('#tech_left') as HTMLElement;
    observer.observe(target);
  }, []);
  const techs: { icon: string; title: string; desc: string }[] = [
    {
      icon: 'public/tech_item1.png',
      title: 'Reliable',
      desc: 'Development base on Substrate with rust.',
    },
    {
      icon: 'public/tech_item2.png',
      title: 'Trust',
      desc: 'DNS records are protected by consensus, no more poisoning.',
    },
    {
      icon: 'public/tech_item3.png',
      title: 'Ductile',
      desc: ' Connect to the whole Polkadot ecosystem, and will support more.',
    },
    {
      icon: 'public/tech_item4.png',
      title: 'Secure',
      desc: 'DNS processing  secure by decentralized network against system level attacks.',
    },
  ];
  return (
    <div className="h-620 w-1280 m-auto">
      <div className="uppercase text-[#ffe102] mb-[2em] pt-[64px] text-[1rem] bold text-center">
        tech
      </div>
      <div className="flex">
        <div id="tech_left" className="flex flex-1 flex-col">
          {techs.slice(0, 2).map(item => {
            return (
              <div key={item.title} className="flex flex-1 flex-col items-center">
                <div className="w-60 h-60 mb-[1rem] rounded-[30px] bg-[#04AB55] flex justify-center items-center">
                  <img className="w-24 h-24" src={item.icon} />
                </div>
                <div className="text-[1.25rem] text-[#fff] mb-[7px]">{item.title}</div>
                <div className="text-[#aeb0b4] text-[1rem] leading[1.5] text-center">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img className="w-456 flex-1" src="public/tech_center.png" />
        </div>
        <div id="tech_right" className="flex flex-1 flex-col">
          {techs.slice(2).map(item => {
            return (
              <div key={item.title} className="flex flex-1 flex-col items-center">
                <div className="w-60 h-60 mb-[1rem] rounded-[30px] bg-[#04AB55] flex justify-center items-center">
                  <img className="w-24 h-24" src={item.icon} />
                </div>
                <div className="text-[1.25rem] text-[#fff] mb-[7px]">{item.title}</div>
                <div className="text-[#aeb0b4] text-[1rem] leading[1.5] text-center pr-[16px]">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RoadMap(): JSX.Element {
  useEffect(() => {
    const gsapCallback = item => {
      console.log('item', item);
      gsap.fromTo(
        item[0].target,
        { autoAlpha: 1, x: -200, opacity: 0 },
        { autoAlpha: 1, x: 0, duration: 0.7, opacity: 1 }
      );
    };
    const options = {
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(gsapCallback, options);
    for (let i = 0; i <= 7; i++) {
      const target = document.querySelector(`#roadmap_${i}`) as HTMLElement;
      observer.observe(target);
    }
  }, []);
  const roadMaps: { time: string; desc: string }[] = [
    {
      time: 'Q2 2022',
      desc: 'Concept building',
    },
    {
      time: 'Q3 2022',
      desc: 'Architect Design',
    },
    {
      time: 'Q4 2022',
      desc: 'V1 standalone version release',
    },
    {
      time: 'Q1 2023',
      desc: 'V2 test-net with xcm release',
    },
    {
      time: 'Q3 2023',
      desc: 'DNS Protocol main-net online',
    },
    {
      time: 'Q4 2023',
      desc: 'Mail Protocol 1st version',
    },
    {
      time: 'Q1 2024',
      desc: 'Mail Protocol test-net',
    },
    {
      time: 'Q3 2024',
      desc: 'Mail Protocol main-net online',
    },
  ];
  return (
    <div className="w-1280 m-auto">
      <div className="uppercase text-[#ffe102] mb-[2em] pt-[64px] text-[1rem] bold text-center">
        roadmap
      </div>
      <div className="flex flex-col items-center">
        {roadMaps.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div
                id={`roadmap_${index}`}
                key={item.time}
                className="flex w-295 h-98 items-center justify-between ml-285"
              >
                <div className="w-10 h-10 bg-[#00ab55] rounded-[50%]"></div>
                <div className="flex flex-col w-250">
                  <div className="text-[1rem] text-[#aeb0b4] leading-[1.75]">{item.time}</div>
                  <div className="text-[1.25rem] text-[#fff] leading-[1.6]">{item.desc}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                id={`roadmap_${index}`}
                key={item.time}
                className="flex w-295 h-98 items-center justify-between mr-285"
              >
                <div className="flex flex-col w-250">
                  <div className="text-[1rem] text-[#aeb0b4] leading-[1.75] text-right">
                    {item.time}
                  </div>
                  <div className="text-[1.25rem] text-[#fff] leading-[1.6] text-right">
                    {item.desc}
                  </div>
                </div>
                <div className="w-10 h-10 bg-[#00ab55] rounded-[50%]"></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

const Home = (): JSX.Element => {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="w-full bg-[#1a2239]">
        <FirstSlide />
      </div>
      <div className="w-full bg-[#212B46]">
        <Features />
      </div>
      <div className="w-full bg-[#1B2238]">
        <Tech />
      </div>
      <div className="w-full bg-[#1B2238]">
        <RoadMap />
      </div>
    </>
  );
};
export default memo(Home);
