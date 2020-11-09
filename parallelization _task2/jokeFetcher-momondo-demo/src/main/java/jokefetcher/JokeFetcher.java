package jokefetcher;

import DTO.ChuckDTO;
import DTO.CustomDTO;
import DTO.DadDTO;
import DTO.JokeDTO;
import DTO.ResultJokeDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import utils.HttpUtils;

public class JokeFetcher {

    private static ExecutorService es = Executors.newCachedThreadPool();
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) throws IOException {

        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com");

        DadDTO dadDTO = gson.fromJson(dad, DadDTO.class);
        ChuckDTO chuckDTO = gson.fromJson(chuck, ChuckDTO.class);
        CustomDTO custom = new CustomDTO(chuckDTO, dadDTO);

        System.out.println("customDTO:");
        System.out.println(gson.toJson(custom));

        System.out.println("JSON fetched from chucknorris:");
        System.out.println(chuck);
        System.out.println("JSON fetched from dadjokes:");
        System.out.println(dad);

    }

    public static CustomDTO runSequental() throws IOException {

        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com");

        ChuckDTO chuckDTO = gson.fromJson(chuck, ChuckDTO.class);
        DadDTO dadDTO = gson.fromJson(dad, DadDTO.class);

        return new CustomDTO(chuckDTO, dadDTO);

    }

    public static ResultJokeDTO runParallel() throws InterruptedException, ExecutionException {
        ChuckHandler chH = new ChuckHandler(gson);
        DadHandler dH = new DadHandler(gson);

        Future<JokeDTO> chuckJoke = es.submit(chH);

        Future<JokeDTO> dadkJoke = es.submit(dH);

        return new ResultJokeDTO(dadkJoke.get(), chuckJoke.get());
    }
}
