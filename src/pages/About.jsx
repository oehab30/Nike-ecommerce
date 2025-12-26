import React from 'react'
import { Button } from "@/components/ui/button"

function About() {
  let x = 10;
  return(
   <>


   <h2>ℹ️ About Us Page {x}</h2>;
       <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  </>
  )
}

export default About