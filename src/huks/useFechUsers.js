import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

const fechUsers = async searchNameUsers => {
  const response = await axios.get(`/search/users?`, {
    params: {
      q: searchNameUsers,
    },
  });
  return response.data;
};

export const useFechUsers = searchNameUsers => {
  const { data, isLoading } = useQuery('/users', () => fechUsers(searchNameUsers), {
    enabled: searchNameUsers !== '',
    retry: 0,
    refetchOnMount: searchNameUsers,
  });
  return { usersData: data, isLoading };
};

/////////////////////

const fechUserslogin = async login => {
  const response = await axios.get(`/users/${login}`);
  return response.data;
};

export const useFechUserslogin = login => {
  const { data, isLoading, isError } = useQuery(
    [`/users', ${login}`],
    () => fechUserslogin(login),
    {
      enabled: login !== undefined,
      retry: 0,
    },
  );

  return { userCard: data, isLoading, isError };
};

//////////////

const fechUsersRepo = async login => {
  const response = await axios.get(`/users/${login}/repos`);
  return response.data;
};

export const useFechUsersRepo = login => {
  const { data, isLoading } = useQuery([`/users', ${login} repo`], () => fechUsersRepo(login), {
    enabled: login !== undefined,
    retry: 0,
  });

  return { userPerpo: data, isLoading };
};
