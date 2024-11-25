
import Avatar from 'react-avatar';

const GroupAvatars = () => {
  const users = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Brown' },
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {users.map((user, index) => (
        <Avatar key={index} name={user.name} round={true} size="50" />
      ))}
    </div>
  );
};

export default GroupAvatars;
