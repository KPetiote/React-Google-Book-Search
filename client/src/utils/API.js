// API JS
// ---------------------------------------------------------------------------

// Required module
import axios from "axios";
const GOOGLEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    // Retrieve Google books
    getGoogleBooks: function(query) {
        return axios.get(GOOGLEURL + query)
    },
    // Saves book to DB
    saveGoogleBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // View book with the given ID
    viewSingleGoogleBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // View all saved books from DB
    viewSavedGoogleBooks: function() {
        return axios.get("/api/books");
    },
    // Deletes book with the given ID
    deleteGoogleBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};