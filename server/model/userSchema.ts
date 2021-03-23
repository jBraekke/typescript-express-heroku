import { model, Schema, Document } from "mongoose";

interface IUserSchema extends Document {
  email: String;
  password: String;
  businessName: String;
  firstName: String;
  lastName: String;
  displayName: String;
  providerId: String;
  provider: String;
}

const UserSchema: Schema = new Schema(
  {
    email: String,
    password: String,
    businessName: String,
    firstName: String,
    lastName: String,
    displayName: String,
    providerId: String,
    provider: String,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default model<IUserSchema>("User", UserSchema);
