package main.java.data.model;

/**
 * Class that captures the user's information
 */

 public class LoginUser {

    private String userId;
    private String displayName;

    public LoginUser(String userID, String displayName)
    {
         this.userId = userID;
         this.displayName = displayName;


    }


    public String getUserId(){return userId;}
    public String getDisplayName(){return displayName;}


 }