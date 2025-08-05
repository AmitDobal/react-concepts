export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;
  return (
    <p>
      <h2>Book Name: {name}</h2>
      <p>Title: {title}</p>
      <h4>Price: {price}</h4>
      <p>Pages: {pages}</p>
    </p>
  );
};
