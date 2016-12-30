/*
{
    "rules": {
        ".read": true, 
        "users": {
          "$user": {
            //can add a message if authenticated
            ".write": "auth.uid === $user" 
          }
        }, 
        "admins": {
            "$admin": {
                "users": {
                    // can write to the users list only if ADMINISTRATOR
                    "$user": {
                        "write":"newData.parent().child(auth.uid).val() === 99"
                    }
                }
            }
        },
        "messages": {
          "$admin": {
            "$message": { 
                //can add a message if they are a MEMBER
                ".write": "(!data.exists() && newData.exists() && root.child('admin/' + $admin + '/users/' + auth.uid).val() >= 10)"
            }
          }
        }
    }
}
*/