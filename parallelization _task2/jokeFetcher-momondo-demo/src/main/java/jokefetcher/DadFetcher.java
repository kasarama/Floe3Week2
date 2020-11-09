package jokefetcher;
import DTO.DadDTO;
import com.google.gson.Gson;
import java.io.IOException;
import utils.HttpUtils;

/**
 *
 * @author magda
 */
public class DadFetcher {
     private boolean isCalled = false;
    private String joke;
    private final String URL="https://icanhazdadjoke.com";
    
     public void doWork(Gson gson) throws IOException{
        if (isCalled) {
            return; //joke  allready set
        }
        isCalled = true;
        
        String jokeValue =HttpUtils.fetchData(URL);
        DadDTO dadDTO = gson.fromJson(jokeValue, DadDTO.class);
         this.joke = dadDTO.getJoke();
         

    }

    public String getJoke() {
        return joke;
    }

    public String getURL() {
        return URL;
    }
    
    
    
    
}
