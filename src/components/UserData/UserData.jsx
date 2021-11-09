// import { useState } from 'react';
import { useFechUserslogin, useFechUsersRepo } from '../../huks/useFechUsers';
// import { fechUserslogin } from '../../utilits/fetchApi';
import Repolis from '../RepoList/RepoList';

function UserData({ isUserDetail, searcUserlogin, login, isDetailCard }) {
  const hendleClick = login => {
    isUserDetail(false);
    searcUserlogin('');
  };

  const { userCard, isLoading } = useFechUserslogin(login);
  const { userPerpo } = useFechUsersRepo(login);
  console.log(userPerpo);

  return (
    <>
      {isLoading && 'LOADING...'}
      {userCard && (
        <>
          <h1>Title User</h1>
          <div>
            <img src={userCard.avatar_url} alt="Avatar" width="150px" />
          </div>
          <ul>
            <li>UserName: {userCard.name}</li>
            <li>Email: {userCard.email}</li>
            <li>Location: {userCard.location}</li>
            <li>Location: {userCard.created_at}</li>
            <li>Public repos: {userCard.public_repos}</li>
          </ul>
          <p>Followers {userCard.followers}</p>
          <p>Bio: {userCard.bio}</p>
          <p>Public repos: {userCard.public_repos}</p>

          <button type="button" onClick={() => hendleClick(login)}>
            Close
          </button>
          <Repolis></Repolis>
        </>
      )}
    </>
  );
}

export default UserData;
