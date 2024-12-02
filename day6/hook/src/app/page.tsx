"use client";

import { log } from "console";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  //click button => increment => setcount => waiting.... => nilai count berubah => useEffect triggered => arg1 => update dom.title
  useEffect (() => {
    document.title = `You Clicked ${count} times`;
    // alert (`You Clicked ${count} times`);
  }, [count]); //componentDidUpdate

  useEffect(() => {
    setCount(5);
  }, []); //componentDidMount

  useEffect (() => {
    console.log("hello");
  }); // componentWillMount tidak disarankan karena akan ke-triggered setiap ada perubahan state

useEffect (() => {
  return () => {
    // alert("componentWillUnmount");
  }
}, []);



  return (
    <div className="flex justify-center items-center min-h-screen">
      <center>
        <h2 className="font-bold">You Clicked {count} times </h2>
        <button className="bg-red-300 rounded-md px-2 py-1 mt-1 font-semibold"
        onClick={() => setCount(count + 1)}
        >
          Click Me
        </button>
      </center>
    </div>
  );
}

//useState(0) => [state,setState] = [0, function untuk mengubah isi dari state] => 


//CRA (create react app) framework dari facebook untuk bisa pakai react
//vite framework (CSR)
//nextjs framework (CSR dan SSR)

// SSR = server side rendering (default nextjs)
// CSR = client side rendering
//untuk menggunakan hooks diwajibkan menggunakan CSR

//browser => html (dom)

//server => process (render) => html => client(browser atau crawler)
//server => html (kosong) => client
//       => dom (update) => client(render)

//crawler (search engine) => purwadhika.com
//                => keyword, title, content yg terdapat di dalam website (memanfaatkan headers di dalam html)


//componentWillMount
//componentDidMount
//componentDidUpdate
//componentWillUnmount

// html => javascript (dom) => update html
// html => javascript => component (javascript) => update html