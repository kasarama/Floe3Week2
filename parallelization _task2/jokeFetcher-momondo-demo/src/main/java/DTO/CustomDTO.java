/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import java.util.ArrayList;

/**
 *
 * @author magda
 */
public class CustomDTO {
    
  private  String joke1;
  private final String joke1Reference="https://api.chucknorris.io/jokes/random";
  private String joke2;
  private final String joke2Reference="https://icanhazdadjoke.com/";

    public CustomDTO() {
    }
  

    public CustomDTO(ChuckDTO chuck, DadDTO dad) {
        this.joke1=chuck.getValue();
        this.joke2=dad.getJoke();
    }

    public String getJoke1() {
        return joke1;
    }

    public void setJoke1(String joke1) {
        this.joke1 = joke1;
    }

    public String getJoke2() {
        return joke2;
    }

    public void setJoke2(String joke2) {
        this.joke2 = joke2;
    }
    
    
  
  


    
    
    
  
}
