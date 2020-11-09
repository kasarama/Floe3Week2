package DTO;

/**
 *
 * @author magda
 */
public class ResultJokeDTO {
   private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;
    
    
    public ResultJokeDTO(JokeDTO j1, JokeDTO j2) {
        this.joke1 = j1.getJoke();
        this.joke1Reference = j1.getUrl();
        this.joke2 = j2.getJoke();
        this.joke2Reference = j2.getUrl();
    }
    
}
