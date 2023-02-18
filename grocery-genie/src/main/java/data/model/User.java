package main.java.data.model;


import javax.security.auth.login.AppConfigurationEntry;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;



@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity

/**
 * Class that captures the user's information
 */


 public class User implements UserDetails{


   private Long userID;
   private String name;
   private String username;
   private String email;
   private String password;
   private UserRole userRole;
   private Boolean locked;
   private Boolean enabled;

   public User(String name, String username, String email, String password,UserRole userRole, Boolean locked, Boolean enabled)
   {

        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
        this.locked = locked;
        this.enabled = enabled;

   }

   @Override
   public Collection<?extends GrantedAuthority> getAuthorities()
   {
       SimpleGrantedAuthority authority =
       new SimpleGrantedAuthority(userRole.name());
       return Collections.singleton(authority);

   }


   @Override
   public String getPassword()
      {
         return password;
      }
   
   
   @Override
   public String getUsername()
{
   return username;

 }

 @Override
  public boolean isAccountNonExpired()
  {
   return true;
  }

 @Override
  public boolean isAccountNonLocked()
  {
   return !locked;
  }

  @Override
  public boolean isCredentialsNonExpired()
  {
   return false;
  }

  @Override
  public boolean isEnabled()
  {
    return enabled;
  }

}