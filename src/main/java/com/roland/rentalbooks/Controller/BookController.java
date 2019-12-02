package com.roland.rentalbooks.Controller;

import com.roland.rentalbooks.Repository.BookRepositoryDAO;
import com.roland.rentalbooks.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    @Autowired
    private BookRepositoryDAO bookRepositoryDAO;

    @GetMapping
    public List<Book> getAllBooks(){
       return bookRepositoryDAO.findAll();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public void createBook(@RequestBody Book book){
        bookRepositoryDAO.save(book);


    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable("id") long id){
        return  bookRepositoryDAO.getOne(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable("id") long id){
         bookRepositoryDAO.deleteById(id);
    }



}
