import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';

const geist = localFont({
    src: [
        {
            path: '../../../public/fonts/Geist[wght].woff2',
            style: 'normal'
        },
    ],
})

interface TSectionHeaderProps {
    children: ReactNode;
}

export default function SectionHeader({children}: TSectionHeaderProps):ReactElement {
    return (<p className={`mb-2 text-4xl ${geist.className} font-extrabold text-stone-400`}>{children}</p>);
}