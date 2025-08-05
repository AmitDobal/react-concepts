export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;
  return (
    <p>
      Name: {name}, Price: {price}
    </p>
  );
};
