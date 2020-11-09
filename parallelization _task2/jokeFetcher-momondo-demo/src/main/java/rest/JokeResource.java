package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {
private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

   
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() {
        return " {\"info\":\"Change me to return jokes as described in the exercise\"}";
    }
    
    @Path("parallel")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokesParallel () throws InterruptedException, ExecutionException {
        return GSON.toJson(jokefetcher.JokeFetcher.runParallel());
    }
    
    @Path("sequental")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokesSequential() throws IOException {
        return GSON.toJson(jokefetcher.JokeFetcher.runSequental());
    }

   
}
