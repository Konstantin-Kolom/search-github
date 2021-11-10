import UserData from '../UserData/UserData';
import s from './Users.module.css';

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
      <ul className={s.list}>
        {dataUsers.map(({ id, login, avatar_url }) => (
          <li key={id} className={s.item}>
            <button type="button" className={s.linkBtn} onClick={() => hendleClick(login)}>
              <img className={s.avatar} src={avatar_url} alt="Aavatar" width="50px" />
              <span className={s.userLogin}>{login}</span>
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
