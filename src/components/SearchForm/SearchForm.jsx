import { useEffect, useState } from 'react';

import s from './SearchForm.module.css';

function SearchForm({ searchUser }) {
  const [name, setName] = useState('');

  const hendleChangeName = e => {
    const value = e.currentTarget.value;
    setName(value);
  };

  const hendleSearch = e => {
    e.preventDefault();
    searchUser(name);
  };

  const reset = () => {
    setName('');
    searchUser('');
  };

  useEffect(() => {
    if (name === '') {
      searchUser('');
    }
  }, [name, searchUser]);

  return (
    <div className={s.box}>
      <form className="{s.ContactEntryForm}" onSubmit={hendleSearch}>
        <label className={s.searchName}>
          <input
            className={s.inputSearchName}
            type="text"
            name="name"
            value={name}
            // value="value"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter GitHub username"
            required
            onChange={hendleChangeName}
          />
        </label>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      <button type="button" className={s.button} onClick={reset}>
        Сlear
      </button>
    </div>
  );
}

export default SearchForm;
