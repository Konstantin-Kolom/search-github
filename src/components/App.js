import { useEffect, useState } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm/SearchForm';
import Users from './Users/Users';
import UserData from './UserData/UserData';
import Error from './Error/Error';
import { useFechUsers } from '../huks/useFechUsers';
import s from './App.module.css';

axios.defaults.baseURL = 'https://api.github.com';

function App() {
  const [searchNameUsers, setSearchNameUsers] = useState([]);
  const [detailOpen, setDetailOpen] = useState(false);
  const [login, setLogin] = useState([]);

  const searchUser = value => setSearchNameUsers(value);
  const userDetail = data => setDetailOpen(data);
  const searcUserlogin = data => setLogin(data);

  const searcUserstring = searchNameUsers.toString();

  //   console.log(typeof searchNameUsers.toString());

  const { usersData, isLoading } = useFechUsers(...searcUserstring);

  const requestFailed = searchNameUsers === '' && !usersData;
  //   console.log(nameUser);

  //   useEffect(() => {
  //     if (nameUsers !== '') {
  //     }
  //   }, [nameUsers]);

  return (
    <div className={s.conteiner}>
      <section>
        <SearchForm searchUser={searchUser} />
        {searchNameUsers === '' && <h2>Please, enter username.</h2>}
        {isLoading && 'LOADING...'}
        {usersData && (
          <Users
            usersData={usersData}
            // searchNameUsers={searchNameUsers}
            userDetail={userDetail}
            searcUserlogin={searcUserlogin}
          />
        )}
        {requestFailed && <Error />}
      </section>
      <section>
        {detailOpen && (
          <UserData userDetail={userDetail} searcUserlogin={searcUserlogin} user={login} />
        )}
      </section>
    </div>
  );
}

export default App;
