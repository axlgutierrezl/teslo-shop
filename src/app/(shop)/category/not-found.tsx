import React from 'react';
import { PageNotFound } from '@/components';
import Link from 'next/link';

const Notfound = () =>  {
  return (
    // <div>
    //   <h1>404 Not Found</h1>
    //   <Link href="/">Regresar</Link>
    // </div>
    <PageNotFound />
  );

}

Notfound.displayName = 'Notfound';
export default Notfound;
