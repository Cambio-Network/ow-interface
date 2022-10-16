import { useNavigate } from 'react-router-dom';
import { TopHeader } from './style';
import Button from '@mui/material/Button';

const ButtonStyle = {
  backgroundColor: '#00AC55',
};

const Header = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {};

  return (
    <TopHeader className="h-114">
      <div className="w-1280  h-full flex items-center m-auto">
        <div className="w-1280 h-full flex items-center ">
          <img className="mr-15" src="public/logo.png" />
          <div className="text-[36px] text-[#fff]">Cambio Network</div>
        </div>
        <Button
          onClick={handleContactUs}
          className="w-184 h-54"
          variant="contained"
          style={ButtonStyle}
        >
          <div className="normal-case text-[24px]">Contact Us</div>
        </Button>
      </div>
    </TopHeader>
  );
};
export default Header;
