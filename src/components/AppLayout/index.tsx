import React, {useState} from 'react';
import Header from "../Header";
import Navigation from "../Navigation";

type AppLayoutProps = {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const toggleNav = (next: boolean)=>
        (event: React.KeyboardEvent | React.MouseEvent)=>
        {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setNavOpen(next);
        };
    return (
        <>
            <Header toggleNav={toggleNav}/>
            <Navigation navOpen={navOpen} toggleNav={toggleNav}/>
            {children}
        </>
    );
}