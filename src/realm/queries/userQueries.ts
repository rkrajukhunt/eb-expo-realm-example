import { useRealm } from "@realm/react";
import User from "../models/User";

// Find user by username and verify password
export const findUser = (realm: Realm, username: string, password: string) => {
  const user = realm.objects("User").filtered(`username = "${username}"`)[0];

  if (user && password === user.passwordHash) {
    return user;
  }

  return null;
};
