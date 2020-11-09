package jokefetcher;

import DTO.ChuckDTO;
import DTO.CustomDTO;
import com.google.gson.Gson;
import java.io.IOException;
import utils.HttpUtils;

/**
 *
 * @author magda
 */
public class ChuckFetcher {

    private boolean isCalled = false;
    private String joke;
    private final String URL="https://api.chucknorris.io/jokes/random";

    public void doWork(Gson gson) throws IOException{
        if (isCalled) {
            return; //joke  allready set
        }
        isCalled = true;
        
        String jokeValue =HttpUtils.fetchData(URL);
        ChuckDTO chuckDTO = gson.fromJson(jokeValue, ChuckDTO.class);
         this.joke = chuckDTO.getValue();
         

    }

    public String getJoke() {
        return joke;
    }

    public String getURL() {
        return URL;
    }
    
    
}
