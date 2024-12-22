import { useState } from 'react';

const Bookshelf = () => {
    // define initial state variables
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState([
        {
            title: '',
            author: ''
        }
    ]);

    // create event handlers
    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // stop default form submission action
        setBooks([...books, newBook]); // show the current books and newly added book after
        setNewBook({title: '', author: ''}); // set newBook back to its initial empty values to clear forms
    };

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                        <form onSubmit={handleSubmit}>
                            <label>Title: </label>
                            <input 
                                value={newBook.title}
                                onChange={handleInputChange}
                            />
                            <label>Author: </label>
                            <input 
                                value={newBook.author}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Add new book!</button>
                        </form>
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */}</div>
            </div>
            <div>
                {/* map through books */}
            </div>
        </>
    );
};

export default Bookshelf;