import { useState } from "react";
import Loader from "../components/atoms/Loader";

export const useLoader = () => {
  const [loading, setLoading] = useState(true);

  return [loading, setLoading, Loader];
};
