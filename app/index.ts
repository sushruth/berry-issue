import { lib } from "lib";
console.log(lib);

import { useState } from "react";

export function useMe() {
  return useState(0);
}
