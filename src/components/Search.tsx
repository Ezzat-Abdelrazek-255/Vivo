"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setSearchResults([]);

    const timeoutId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // Adjust the delay (in milliseconds) as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    // Perform search operation with debouncedTerm
    const fetchSearch = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${debouncedTerm}&limit=10`
      );
      const data = await res.json();
      setSearchResults(data.products);
    };
    fetchSearch();
    // You can call an API or perform any other search-related operation here
  }, [debouncedTerm]);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    if (!searchTerm) return;
    e.preventDefault();
    setSearchTerm("");
    setSearchResults([]);
    router.push(`/products?q=${searchTerm}`);
  };

  return (
    <div className="relative">
      <form action="#" onSubmit={handleSubmit} className="relative">
        <input
          className="text-background w-[500px] p-4 rounded-lg rounded-b-none focus:outline-none focus:ring-4"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          className="hover:bg-background/80 hover:text-foreground absolute top-1/2 -translate-y-1/2 right-4 text-foreground bg-background"
        >
          Search
        </Button>
      </form>
      {searchTerm && (
        <ul className="absolute bg-foreground/70 text-background w-full flex flex-col  p-4 divide-y-2">
          {searchResults.length === 0 ? (
            <p>No Results Found</p>
          ) : (
            searchResults.map((result) => (
              <Button
                variant="ghost"
                className="rounded-none py-2"
                asChild
                key={result.id}
              >
                <Link
                  href={`/products/${result.id}`}
                  onClick={() => {
                    setSearchTerm("");
                    setSearchResults([]);
                  }}
                >
                  {result.title}
                </Link>
              </Button>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
