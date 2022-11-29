import SuspenseLoading from './SuspenseLoading';
import React, { Suspense } from 'react';

function LazyContainer() {
    // const LazyComp = React.lazy(() => import(`./index`));
    return (
        <div>
            <Suspense fallback={<SuspenseLoading />}>
                {/* <LazyComp /> */}
            </Suspense>
        </div>
    );
}

export default LazyContainer;
