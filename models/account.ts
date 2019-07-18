import mongoose, { Schema, Document } from "mongoose";

export interface IAccount extends Document {
  userName: string;
  password: string;
  userRole: string;
  nodes: any[];
  email: string;
}

const accountsSchema: Schema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userRole: { type: String, required: true },
  nodes: { type: Array, default: [] },
});

export default mongoose.model<IAccount>("account", accountsSchema);
