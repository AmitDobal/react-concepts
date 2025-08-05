export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>

      <ul>
        {books.map((book, i) => (
          <li key={i+book}>{book}</li>
        ))}
      </ul>
    </>
  );
};
