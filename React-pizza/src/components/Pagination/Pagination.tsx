import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination = ({ currentPage, onChangePage }: PaginationProps) => {
  return (
    <div className={styles.wrapper}>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={10}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
