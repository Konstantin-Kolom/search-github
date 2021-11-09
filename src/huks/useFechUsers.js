import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const name = 'konst';

const fechUsers = async searchNameUsers => {
  //   const response = await axios.get(`/users/${name}`);
  //   const response = await axios.get(`/users/${name}`);
  //   const response = await axios.get(`/users/${name}`);
  const response = await axios.get(`/search/users?q=${searchNameUsers}`, {
    //  initialData: [],
    //  enabled: searchNameUsers !== Object,
  });
  return response.data;
};

export const useFechUsers = () => {
  const { data, isLoading } = useMutation('/users', fechUsers);

  return { usersData: data, isLoading };
};

/////////////////////

const fechUserslogin = async user => {
  const response = await axios.get(`/users/${user}`);
  return response.data;
};

// const user = data?.id;

export const useFechUserslogin = () => {
  const { data, isLoading } = useMutation(fechUserslogin);
  //   console.log(data);

  return { userLogin: data, isLoading };
};
