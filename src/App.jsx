import './App.css';
import BasicAvatar from './components/BasicAvatar';
import ClickableAvatar from './components/ClickableAvatar';
import ColoredAvatar from './components/ColoredAvatar';
import CustomInitialsAvatar from './components/CustomInitialsAvatar';
import FallbackAvatar from './components/FallbackAvatar';
import GravatarAvatar from './components/GravatarAvatar';
import GroupAvatars from './components/GroupAvatars';
import ImageAvatar from './components/ImageAvatar';
import MultiSourceAvatar from './components/MultiSourceAvatar';
import SizeAvatar from './components/SizeAvatar';
import StyledAvatar from './components/StyledAvatar';
import TooltipAvatar from './components/TooltipAvatar';

function App() {
  return (
    <div style={{display: 'flex', gap: '30px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <BasicAvatar />
      <ColoredAvatar />
      <CustomInitialsAvatar />
      <FallbackAvatar />
      <GravatarAvatar />
      <GroupAvatars />
      <ImageAvatar />
      <MultiSourceAvatar />
      <StyledAvatar />
      <TooltipAvatar/>
      <SizeAvatar/>
      <ClickableAvatar/>
    </div>
  );
}

export default App;
