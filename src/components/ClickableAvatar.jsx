import Avatar from 'react-avatar';

const ClickableAvatar = () => {
  const handleClick = () => alert('Avatar clicked!');

  return <Avatar name='Clickable Avatar' round={true} onClick={handleClick} style={{cursor: 'pointer'}} />;
};

export default ClickableAvatar;
