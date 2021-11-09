// import { useState } from 'react';
import UserData from '../UserData/UserData';
// import { fechUserslogin } from '../../utilits/fetchApi';

function Users({ usersData, isUserDetail, searcUserlogin }) {
  const dataUsers = usersData.items;

  const hendleClick = login => {
    isUserDetail(true);
    searcUserlogin(login);
    //  fechUserslogin(login);
  };

  //   const { detailData, isLoading } = fechUserslogin;
  //   console.log(detailData);

  return (
    <>
      <ul>
        {dataUsers.map(({ id, login, avatar_url }) => (
          <li key={id}>
            <button type="button" onClick={() => hendleClick(login)}>
              <img src={avatar_url} alt="Aavatar" width="50px" />
              {login}
              <p>Repo: sdds</p>
            </button>
          </li>
        ))}
      </ul>
      <UserData />
    </>
  );
}

export default Users;
