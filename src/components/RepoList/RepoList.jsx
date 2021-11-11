import { useEffect, useState } from 'react';
import s from './RepoList.module.css';

function Repolist(userPerpo) {
  const [repoUser, setRepoUser] = useState([]);
  const [filter, setFilter] = useState([]);

  console.log(repoUser);
  console.log(userPerpo);

  const repo = userPerpo.userPerpo;

  const getVisibleContact = (allRepo, filter) => {
    //  const normalizeFilter = filter.toLowerCase();
    return allRepo.filter(repo => repo.includes(filter));
  };

  const onchangeFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  useEffect(() => {
    setRepoUser(repo);
  }, [repo]);

  //   useEffect(() => {
  //     const visibleRepo = getVisibleContact(repo, filter);
  //     //  console.log(visibleRepo);

  //     if (filter !== '' && repo !== undefined) {
  //       setRepoUser(visibleRepo);
  //     } else {
  //       setRepoUser(repo);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [filter, repo]);

  return (
    <>
      <label>
        {/* <span> */}
        {/* <AiOutlineSearch /> */}
        {/* </span> */}
        <span>Find contacts by name:</span>
        <input
          type="text"
          //  value={value}
          //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={onchangeFilter}
        />
      </label>
      {repo !== undefined && (
        <ul>
          {repo.map(({ id, html_url, name, forks, stargazers_count, updated_at }) => (
            <li key={id}>
              <a href={html_url} target="blank">
                <p>Title: {name}</p>
                <p>Forks: {forks}</p>
                <p>Stars: {stargazers_count}</p>
                <p>Date update: {updated_at}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Repolist;
