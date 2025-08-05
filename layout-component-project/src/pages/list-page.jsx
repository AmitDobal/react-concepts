import React from "react";
import { RegularList } from "../componets/lists/lists/Regular";
import { authors } from "../data/author";
import { SmallAuthorListItem } from "../componets/lists/authors/SmallListItems";
import { LargeAuthorListItem } from "../componets/lists/authors/LargeListItems";
import { books } from "../data/books";
import { LargeBookListItem } from "../componets/lists/books/LargeListItems";
import { SmallBookListItem } from "../componets/lists/books/SmallListItems";
import { NumberedList } from "../componets/lists/lists/Numbered";

const ListPage = () => {
  return (
    <div>
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />

      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />

      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
    </div>
  );
};

export default ListPage;
