import React from "react";
import { Modal } from "../componets/modal/Modal";
import { LargeBookListItem } from "../componets/lists/books/LargeListItems";
import { books } from "../data/books";

const ModalsPage = () => {
  return (
    <div>
      <Modal>
        <LargeBookListItem book={books[0]}/>
      </Modal>
    </div>
  );
};

export default ModalsPage;
