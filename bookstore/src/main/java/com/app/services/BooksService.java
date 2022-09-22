package com.app.services;

import java.util.List;

import com.app.pojos.Books;


public interface BooksService {

	public List<Books> getBooks();
	
	public Books getBooks(int bookId);
	
	Books addBook(Books book);
	
	String deleteBook(int bookId);
	
	Books updateBookDetails(Books book);
	
//	public List<Books> searchBooks(String keyword);


	
	
}
