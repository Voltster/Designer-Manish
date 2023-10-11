import { useEffect } from "react"

//Step-1 This hook detects clicks outside of the specified component and calls the provided handler function.
export default function useOnClickOutside(ref, handler) {
    useEffect(() => {

        //Step-2 Define the listener function to be called on click/touch events
        const listener = (event) => {

             //Step-3 if the reference is not present
             // or the target is descendant of the reference
            // return
            if (!ref.current || ref.current.contains(event.target)){
                return
            }

            //Step-4 Otherwise, call the provided handler function
            handler(event)
        }

        //Step-5 Add event listeners for mousedown and touchstart events on the document
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener );


        //Step-6 Cleanup function to remove the event listeners when the component unmounts or when the ref/handler dependencies change
        return () => {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener );
        }

    },[ref, handler])

    //Step-7 Only run this effect when the ref or handler function changes
    
}




