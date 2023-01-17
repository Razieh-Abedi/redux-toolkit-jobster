import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useDispatch, useSelector } from "react-redux";

function PageBtnContainer() {
  const dispatch = useDispatch();
  const { page, numOfPages } = useSelector((store) => store.allJobs);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    console.log("prev page");
  };
  const nextPage = () => {
    console.log("next page");
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft /> prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => console.log("change page")}
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
export default PageBtnContainer;
