import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config'; // Make sure this path is correct

export default function ListMovies() {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    getListMovies();
  }, []);

  useEffect(() => {
    console.log(listMovies);
  }, [listMovies]);

  async function getListMovies() {
    const listMoviesCollectionRef = collection(db, 'ListMovies');
    try {
      const response = await getDocs(listMoviesCollectionRef);
      const movs = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setListMovies(movs);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h4>List Movies</h4>
      <ul>
        {listMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
