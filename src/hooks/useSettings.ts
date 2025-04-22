import { useState } from 'react';

export function useSettings() {
    const [soundEffects, setSoundEffects] = useState(true);
    const [vibration, setVibration] = useState(true);
    const [animations, setAnimations] = useState(true);
    const [systemMessages, setSystemMessages] = useState(true);
    const [rewardAvailable, setRewardAvailable] = useState(true);
    const [infoUpdate, setInfoUpdate] = useState(true);
    const [support, setSupport] = useState(true);

    const toggleSetting = (key: string) => {
        switch (key) {
            case 'soundEffects':
                setSoundEffects(!soundEffects);
                break;
            case 'vibration':
                setVibration(!vibration);
                break;
            case 'animations':
                setAnimations(!animations);
                break;
            case 'systemMessages':
                setSystemMessages(!systemMessages);
                break;
            case 'rewardAvailable':
                setRewardAvailable(!rewardAvailable);
                break;
            case 'infoUpdate':
                setInfoUpdate(!infoUpdate);
                break;
            case 'support':
                setSupport(!support);
                break;
        }
    };

    return {
        soundEffects,
        vibration,
        animations,
        systemMessages,
        rewardAvailable,
        toggleSetting,
        infoUpdate,
        support,
    };


}
