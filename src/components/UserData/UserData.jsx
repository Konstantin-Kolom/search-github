import { useFechUserslogin } from '../../huks/useFechUsers';
import { fechUserslogin } from '../../utilits/fetchApi';

function UserData({ userDetail, searcUserlogin, user }) {
  //   console.log(user);

  const hendleClick = user => {
    console.log(user);
    fechUserslogin(user);
    userDetail(false);
    searcUserlogin('');
  };

  const { userLogin, isLoading } = useFechUserslogin();

  //   console.log(isLoading);
  //   console.log(userLogin);

  return (
    <>
      <h1>Title User</h1>
      <div>Avatar</div>
      <ul>
        <li>UserName</li>
        <li>Email</li>
        <li>Location</li>
      </ul>

      <button type="button" onClick={() => userLogin({ user })}>
        Close
      </button>
    </>
  );
}

export default UserData;
