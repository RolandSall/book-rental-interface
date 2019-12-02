package com.roland.rentalbooks.Controller;

        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String Greeting(){
        return  "Hello There!";
    }

}


