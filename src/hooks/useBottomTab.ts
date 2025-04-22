import { useState, useEffect } from 'react';
import { usePathname } from 'expo-router';

export type TabKey = 'home' | 'redeem' | 'microentrepreneurRegistry' | 'progress' | 'profile';

export function useBottomTab() {
    const [current, setCurrent] = useState<TabKey>('home');
    const pathname = usePathname();

    useEffect(() => {
        const route = pathname.split('/').pop() as TabKey;
        if ([
            'home',
            'redeem',
            'microentrepreneurRegistry',
            'progress',
            'profile'
        ].includes(route)) {
            setCurrent(route);
        }
    }, [
        pathname
    ]);

    return {
        current,
        setCurrent
    };
}