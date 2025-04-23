export const useHomeData = () => {
    const user = {
      name: 'Christian Serrano',
      zone: 'Córdoba, Veracruz',
      image: require('~assets/images/profile-image.png'),
    };
  
    const referredInfo = {
      completedModules: 1,
      rewardName: 'Tarjeta de regalo',
      status: 'Disponible',
    };
  
    return {
      user,
      referredInfo,
    };
  };
  