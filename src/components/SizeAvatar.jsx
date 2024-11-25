
import Avatar from 'react-avatar';

const SizeAvatar = () => {
  return (
    <div>
      <Avatar name="Small" size="40" />
      <Avatar name="Medium" size="80" />
      <Avatar name="Large" size="120" round={true} />
    </div>
  );
};

export default SizeAvatar;
