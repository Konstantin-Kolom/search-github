import { useEffect, useState } from 'react';

import SearchForm from './SearchForm/SearchForm';
import Users from './Users/Users';
import UserData from './UserData/UserData';
import Error from './Error/Error';
import { useFechUsers } from '../huks/useFechUsers';
import s from './App.module.css';

function App() {
  const [searchNameUsers, setSearchNameUsers] = useState('');
  const [detailOpen, setDetailOpen] = useState(false);
  const [login, setLogin] = useState([]);
  const [detailCard, setDetailCard] = useState('');

  const searchUser = value => setSearchNameUsers(value);
  const isUserDetail = data => setDetailOpen(data);
  const searcUserlogin = data => setLogin(data);
  const isDetailCard = data => setDetailCard(data);

  const { usersData, isLoading } = useFechUsers(searchNameUsers);

  const requestFailed = searchNameUsers === '' && !usersData;

  //  useEffect(() => {
  //    setTimeout(() => searchNameUsers !== '', 2000);
  //  }, [searchNameUsers]);

  return (
    <div className={s.conteiner}>
      <section className={s.section}>
        <SearchForm searchUser={searchUser} />
        {isLoading && 'LOADING...'}
        {searchNameUsers === '' && <h2>Please, enter username.</h2>}
        {searchNameUsers !== '' && usersData && (
          <Users
            usersData={usersData}
            // searchNameUsers={searchNameUsers}
            isUserDetail={isUserDetail}
            searcUserlogin={searcUserlogin}
          />
        )}
        {requestFailed && <Error />}
      </section>

      {detailOpen && (
        <section className={s.sectionUser}>
          <UserData
            isUserDetail={isUserDetail}
            searcUserlogin={searcUserlogin}
            login={login}
            isDetailCard={isDetailCard}
          />
        </section>
      )}
    </div>
  );
}

export default App;
