import { useFechUserslogin, useFechUsersRepo } from '../../huks/useFechUsers';

import Repolist from '../RepoList/RepoList';
import s from './Userdata.module.css';

function UserData({ isUserDetail, searcUserlogin, login, isDetailCard }) {
  const hendleClick = () => {
    isUserDetail(false);
    searcUserlogin('');
  };

  const { userCard, isLoading, isError } = useFechUserslogin(login);
  const { userPerpo } = useFechUsersRepo(login);

  return (
    <>
      {isLoading && 'LOADING...'}
      {isError && <h2>Sorry, the request limit has been exceeded. Please try again later.</h2>}
      {userCard && (
        <>
          <h1>User information</h1>
          <div className={s.box}>
            <img src={userCard.avatar_url} alt="Avatar" width="200px" />

            <ul className={s.list}>
              <li className={s.item}>
                UserName: <span className={s.text}>{userCard.name}</span>
              </li>
              <li className={s.item}>
                Login: <span className={s.text}>{userCard.login}</span>
              </li>
              <li className={s.item}>
                Email: <span className={s.text}>{userCard.email}</span>
              </li>
              <li className={s.item}>
                Location: <span className={s.text}>{userCard.location}</span>
              </li>
              <li className={s.item}>
                Followers: <span className={s.text}>{userCard.followers}</span>
              </li>
              <li className={s.item}>
                Following: <span className={s.text}>{userCard.following}</span>
              </li>
              <li className={s.item}>
                Created by: <span className={s.text}>{userCard.created_at}</span>
              </li>
              {/* <li>Public repos: {userCard.public_repos}</li> */}
            </ul>
          </div>
          {/* <p>Followers {userCard.followers}</p> */}
          <p>Bio: {userCard.bio}</p>
          <p>Public repos: {userCard.public_repos}</p>

          <button className={s.closeBtn} type="button" onClick={() => hendleClick}>
            Close
          </button>
          <Repolist userPerpo={userPerpo} />
        </>
      )}
    </>
  );
}

export default UserData;
