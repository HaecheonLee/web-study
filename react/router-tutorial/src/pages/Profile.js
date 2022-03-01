import { useParams } from 'react-router-dom';

const data = {
  dev1: {
    name: 'John',
    description: 'React developer',
  },
  dev2: {
    name: 'Mary',
    description: 'C# developer',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>User Profile</h1>
      {
        profile ?
        (<div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>) :
        ( <p>Unknown user</p> )
      }
    </div>
  );
}

export default Profile;
