import { useEffect, useMemo } from "react";
import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import usePagination from "./hooks/usePagination";

function App() {
  const baseUrl = 'https://northwind.now.sh/api/categories';
  let currPage = 1
  let lastsPage = 3
  const  {handleClick, pageNumbers, pageData } = usePagination(baseUrl, currPage, lastsPage)


  return (
    <>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
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
      </table> */}
      <Products/>
    </>
  );
}

export default App;
