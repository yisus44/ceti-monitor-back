import { Schema, model } from "mongoose";

interface IUser {
  email: String;
  username: String;
  password: String;
}
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

const User = model<IUser>("User", UserSchema);
export { User, IUser, UserSchema };
