import { useState } from 'react';

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

  return (
    <div>
      <form className="{s.ContactEntryForm}" onSubmit={hendleSearch}>
        <label className="{s.NameInputField}">
          {/* <span className="{s.iconForm}"></span> */}
          {/* <span className="">Name:</span> */}
          <input
            className=""
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
        <button type="submit">Search</button>
      </form>

      <button type="button" onClick={reset}>
        Сlear
      </button>
    </div>
  );
}

export default SearchForm;
