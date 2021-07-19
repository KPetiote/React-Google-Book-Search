// HOME JS
// ---------------------------------------------------------------------------

import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Input, SubmitBtn} from "../components/SearchField/SearchField";
import API from "../utils/API";
import ResultCard from "../components/ResultCard/ResultCard";

class Home extends Component {

    state = {
        books: [],
        search: ""
    };

    // Search function for books through Google API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    // Function to handle input data
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // Function to handle form data submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successfully POSTED to DB!", res))
        .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                <form>
                    <h5>Search for books</h5>
                    <Input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="e.g. Harry Potter"
                    />
                    <SubmitBtn onClick={this.handleFormSubmit}/>
                </form>
                
                {this.state.books.length ? (
                    <ResultCard 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </ResultCard>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>Nothing to display yet...</p>
                    </div>
                )}
                
                </Container>
            </div>
        )
    }
}

export default Home