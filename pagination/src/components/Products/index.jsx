  import { useState } from "react";
  import usePagination from "../../hooks/usePagination";

  const Products = () => {
    const baseUrl = "https://northwind.vercel.app/api/products";
    let firstPage = 1;
    let lastPage = 25;
    const { handleClick, pageNumbers, pageData, setData } = usePagination(
      baseUrl,
      firstPage,
      lastPage
    );
    const handleClickSort = () => {
      const sortedData = [...pageData].sort((a, b) =>  a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      setData(sortedData);
    };
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th
                onClick={handleClickSort}
              >
                <button>Sort</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
          <div>
            {pageNumbers.map((num) => (
              <button onClick={() => handleClick(num)}>{num}</button>
            ))}
          </div>
        </table>
      </div>
    );
  };

  export default Products;
