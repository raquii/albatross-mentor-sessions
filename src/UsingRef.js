import { useRef } from "react";

export default function UsingRef() {
    const myRef = useRef();

    console.log("myRef: ", myRef);
  return (
    <div>
        <h1>What the Ref?</h1>
    </div>
  )
}
