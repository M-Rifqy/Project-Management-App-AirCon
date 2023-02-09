import React from 'react';
import Authenticated from "@/Layouts/Authenticated/Index";

export default function Dashboard() {
  return (
    <Authenticated>
        <h1 className='text-[30px]'>
            Dashboard
        </h1>
    </Authenticated>
  )
}
