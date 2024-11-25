
import Avatar from 'react-avatar';

const ColoredAvatar = () => {
  return (
    <div>
      <Avatar name="John Doe" color="#FF5733" textColor="#fff" />
      <Avatar name="Jane Smith" round={true} />
    </div>
  );
};

export default ColoredAvatar;
