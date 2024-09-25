import { configureStore } from "@reduxjs/toolkit"
import * as slices from "./index"

const reducer = Object.values(slices).reduce(
  (reducer, slice) => ({ ...reducer, [slice.name]: slice.reducer }),
  {}
)

export default configureStore({ reducer })
