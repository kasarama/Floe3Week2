package jokefetcher;

import DTO.JokeDTO;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.concurrent.Callable;

/**
 *
 * @author magda
 */
public class DadHandler implements Callable<JokeDTO>{
    
    DadFetcher fetcher;
Gson gson;

    public DadHandler(Gson gson) {
        this.fetcher = new DadFetcher();
        this.gson=gson;
    }


    @Override
    public JokeDTO call() throws IOException {
        fetcher.doWork(this.gson);
        return new JokeDTO(fetcher.getURL(),fetcher.getJoke());
    }
}
