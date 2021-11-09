import { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';

// import axios from 'axios';

import SearchForm from './SearchForm/SearchForm';
import Users from './Users/Users';
import UserData from './UserData/UserData';
import Error from './Error/Error';
import { useFechUsers } from '../huks/useFechUsers';
import s from './App.module.css';

// axios.defaults.baseURL = 'https://api.github.com';

// const fechUsers = async searchNameUsers => {
//   //   const ggg = getSelection;
//   //   console.log(getSelection);
//   const response = await axios.get(`/search/users?q=`, {
//     params: {
//       q: searchNameUsers,
//     },
//   });
//   return response.data;
// };

function App() {
  const [searchNameUsers, setSearchNameUsers] = useState('');
  const [detailOpen, setDetailOpen] = useState(false);
  const [login, setLogin] = useState([]);
  const [detailCard, setDetailCard] = useState('');

  const searchUser = value => setSearchNameUsers(value);
  const isUserDetail = data => setDetailOpen(data);
  const searcUserlogin = data => setLogin(data);
  const isDetailCard = data => setDetailCard(data);

  //   const searcUserstring = searchNameUsers.toString();

  const { usersData, isLoading } = useFechUsers(searchNameUsers);
  //   console.log(usersData);

  //   const { usersData, isLoading, } = useQuery('/users',() => fechUsers(searchNameUsers), {
  //     enabled: searchNameUsers !== undefined,
  //   });
  //   console.log(searchNameUsers);

  const requestFailed = searchNameUsers === '' && !usersData;

  useEffect(() => {
    setTimeout(() => searchNameUsers !== '', 2000);
  }, [searchNameUsers]);

  return (
    <div className={s.conteiner}>
      <section>
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
      <section>
        {detailOpen && (
          <UserData
            isUserDetail={isUserDetail}
            searcUserlogin={searcUserlogin}
            login={login}
            isDetailCard={isDetailCard}
          />
        )}
      </section>
    </div>
  );
}

export default App;
