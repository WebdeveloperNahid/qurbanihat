
import Navebar from '@/components/shared/Navebar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <>
         <Navebar></Navebar>
         {children}
        </>
    );
};

export default AuthLayout;