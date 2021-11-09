// import { useQuery } from 'react-query';
import axios from 'axios';

// const name = 'konst';

// const fechUsers = async nameUser => {
//   //   const name1 = JSON.stringify(nameUser);
//   //   const name2 = nameUser;
//   //   console.log(name2);
//   //   const response = await axios.get(`/users/${name}`);
//   //   const response = await axios.get('repositories');
//   //   const response = await axios.get(`/users/${name}`);
//   //   const response = await axios.get(`/users/${name}`);
//   const response = await axios.get(`/search/users?q=${name}`, {
//     initialData: [],
//     enabled: nameUser === undefined,
//   });
//   return response.data;
// };

// export const useFechUsers = () => {
//   const { data, isLoading } = useQuery('/users', fechUsers, {});

//   return { usersData: data, isLoading };
// };
/////////////////

export const fechUserslogin = async login => {
  //   const name1 = JSON.stringify(nameUser);
  //   const name2 = nameUser;
  //   console.log(name2);
  const response = await axios.get(`/users/${login}`);
  //   const response = await axios.get('repositories');
  //   const response = await axios.get(`/users/${name}`);
  //   const response = await axios.get(`/users/${name}`);
  //   const response = await axios.get(`/search/users?q=${name}`, {
  //     initialData: [],
  //     enabled: nameUser === undefined,
  //   });
  return response.data;
};

// export const useFechUserslogin = () => {
//   const { data, isLoading } = useQuery('/users', fechUserslogin, {});
//   console.log(data);

//   return { detailData: data, isLoading };
// };
