package jokefetcher;

import DTO.JokeDTO;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.concurrent.Callable;

/**
 *
 * @author magda
 */
public class ChuckHandler implements Callable<JokeDTO>{
    
ChuckFetcher fetcher;
Gson gson;

    public ChuckHandler(Gson gson) {
        this.fetcher = new ChuckFetcher();
        this.gson=gson;
    }


    @Override
    public JokeDTO call() throws IOException {
        fetcher.doWork(this.gson);
        return new JokeDTO(fetcher.getURL(),fetcher.getJoke());
    }
    
}
