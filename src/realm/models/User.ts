import { ObjectSchema } from "realm";
import { Realm, RealmProvider, useRealm, useQuery } from "@realm/react";

class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  username!: string;
  password!: string;

  static generate(username: string, password: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      username,
      password,
    };
  }

  static schema: ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      username: "string",
      password: "string",
    },
  };
}

export default User;
