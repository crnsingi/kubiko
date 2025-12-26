import { Models } from "react-native-appwrite";

export interface Place extends Models.Document {
  image: string;
  name: string;
  address: string;
  rating: number;
  price: number;
  type: string;
}