import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTMPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Envia evento de pageview para o GTM quando a rota muda
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname,
          title: document.title,
          url: window.location.href
        }
      });
      
      console.log('GTM PageView tracked:', location.pathname);
    }
  }, [location]);

  return null;
};

export default GTMPageView;
