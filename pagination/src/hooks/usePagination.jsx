import {useState,useEffect} from "react";
import useFetch from "./useFetch";

const usePagination = (url,curPage,lastPage) => {
  const [currentPage, setCurrentPage] = useState(curPage);
  const [pagePerData, setPagePerData] = useState(lastPage);
  const [pageNumbers, setPageNumbers] = useState([]);
  const {data, setData} = useFetch(url)
  
  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(data.length / pagePerData); i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [data]);

  const lastElemIndex = currentPage * pagePerData;
  const firstElemIndex = lastElemIndex - pagePerData;

  const pageData =data.slice(firstElemIndex, lastElemIndex)

  const handleClick = (num) => {
    setCurrentPage(num)
  }
  return {handleClick, pageNumbers, pageData, setData}
};

export default usePagination;
