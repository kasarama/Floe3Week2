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
public class ChuckDTO {
/*
    
    "categories": [],
  "created_at": "2020-01-05 13:42:28.984661",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "Wcn_mFB2S3i_425hobks0w",
  "updated_at": "2020-01-05 13:42:28.984661",
  "url": "https://api.chucknorris.io/jokes/Wcn_mFB2S3i_425hobks0w",
  "value": "Chuck Norris doesn't follow trends, he sets them."

    */    
    private ArrayList categories=new ArrayList();
    private String  created_at;
  private String icon_url;
  private String id;
  private String updated_at;
  private String url;
  private String value;

    public ChuckDTO(String created_at, String icon_url, String id, String updated_at, String url, String value) {
        this.created_at = created_at;
        this.icon_url = icon_url;
        this.id = id;
        this.updated_at = updated_at;
        this.url = url;
        this.value = value;
    }

    public String getId() {
        return id;
    }

    public String getValue() {
        return value;
    }
  
}
