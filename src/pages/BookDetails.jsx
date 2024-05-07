import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./BookDetails.css"

function BookDetails() {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchBookDetails();
    }, [id]);

    const fetchBookDetails = async () => {
        try {
            const response = await axios.get(`https://softwium.com/api/books/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    };

    return (
        <div>
            <h1>Book Details</h1>
            <p>Title: {book.title}</p>
            <p>Authors: {book.authors && book.authors.join(', ')}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Page Count: {book.pageCount}</p>
        </div>
    );
}

export default BookDetails;
