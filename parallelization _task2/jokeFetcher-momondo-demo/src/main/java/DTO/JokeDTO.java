package DTO;

/**
 *
 * @author magda
 */
public class JokeDTO {
    private String url;
    private String joke;

    public JokeDTO(String url, String joke) {
        this.url = url;
        this.joke = joke;
    }

    public String getUrl() {
        return url;
    }

    public String getJoke() {
        return joke;
    }
    
    
}
