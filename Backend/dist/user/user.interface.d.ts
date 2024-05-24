import { Document } from "mongoose";
export interface IsUser extends Document {
    readonly password: string;
    readonly email: string;
    auth_token: string;
}
