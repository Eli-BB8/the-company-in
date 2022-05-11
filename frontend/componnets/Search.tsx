import { ChangeEvent, useCallback, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/search.module.css";

type SearchType = { setData: (a: any) => void };
export default function Search({ setData }: SearchType) {
  const searchRef = useRef(null);
  const [searchTxt, setSearchTxt] = useState("");

  const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };
  return (
    <div className={styles.container} ref={searchRef}>
      <input
        className={styles.search}
        name="customerText"
        placeholder="enter name to search"
        type="text"
        onChange={handleTyping}
      />
      <button onClick={() => setData(searchTxt)}>Search</button>
      {/* //TODO style */}
    </div>
  );
}
