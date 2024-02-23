// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// Importing modules from React library.
// importing NavLink componentfrom react-router-dom for navigation.
import { NavLink } from "react-router-dom";
// Importing axios library for making HTTP requests.
import axios from 'axios';
import "./Books.css";
// Define the functional componet BookApp.
const BooksApp = () => {
    // State variables useState hook
    const [bookData, setBookData] = useState([]);//State to hold the book data
    const [searchInput, setSearchInput] = useState("");//State to hold search input
    // Function to fetch data from the API
    const getData = () => {
        axios.get("https://reactnd-books-api.udacity.com/books", {
            headers: { 'Authorization': 'whatever-you-want' },
        })
        .then((res) => {
            if (res && res.data && res.data.books) {
                setBookData(res.data.books);
                console.log(res.data);
            } 
        })
        .catch((err) => {
            console.log("Error fetching data:", err);
        });
    };
    // useEffect hook to fetch data when component mounts.
    useEffect(() => {
        getData();
    }, []);

    //Filtered books based on search input
    const filteredBooks=bookData.filter((book)=>{
        if(!searchInput){
            return true;
        }
        const title=book.title.toLowerCase();
        return title.startsWith(searchInput.toLowerCase());
    });
    const handleSearch=(e)=>{
        setSearchInput(e.target.value);
    }
    // Return JSX representing the component's UI
    return (
        <div>
            <div className='container'>
                <div className='sub-container'>
                    <div className='main-container'>
                        <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="image-logo" />
                        <h1>Kalvium Books</h1>
                    </div>
                    <div className='register'>
                        <div className='search-container'>
                            <input type='text' placeholder='🔎   Search books' onChange={handleSearch}/>
                        </div>
                    </div>
                    
                    <div className='register-container'>
                    <NavLink to ="/register">
                        <button>Register</button>
                        </NavLink>
                        
                        <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-question-mark-vector-icon-png-image_963976.jpg" alt="instructions-logo" />
                        
                    </div>
                </div>
            </div>

            <div className="image-container">
                {filteredBooks.length ? (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="book">
                            
                                <img
                                    
                                    src={book.imageLinks.thumbnail}
                                    alt={book.title}
                                />
                            
                            <div className="details">
                                <h3 >{book.title}</h3>
                                <p>{book.authors.join(", ")}</p>
                                <p>
                                 {book.averageRating }✨ <span>Free</span>
                                </p>
                                </div>
                        </div>
                    ))
                ) : (
                    <p>No Result Found</p>
                )}
            </div>
        </div> 
       
    );
};

export default BooksApp;
