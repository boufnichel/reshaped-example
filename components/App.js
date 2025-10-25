"use client";

import { Reshaped } from "reshaped";
import "reshaped/themes/slate/theme.css";

export default function App({ children }) {
  return <Reshaped theme="slate">{children}</Reshaped>;
}
