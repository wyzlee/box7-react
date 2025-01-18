// Créer un fichier utils/fetchUtils.js
const defaultFetchOptions = {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
  
  export const apiFetch = async (url, options = {}) => {
    const finalOptions = {
      ...defaultFetchOptions,
      ...options,
      headers: {
        ...defaultFetchOptions.headers,
        ...options.headers,
      },
    };
  
    const response = await fetch(url, finalOptions);
    
    // Log pour le débogage
    console.log('Fetch Request:', {
      url,
      options: finalOptions,
      cookies: document.cookie,
      headers: response.headers,
    });
  
    return response;
  };
  
  // Utilisation dans les composants:
  import { apiFetch } from '../utils/fetchUtils';
  
  // Exemple d'utilisation:
  const response = await apiFetch(`${config.API_BASE_URL}/auth/check-auth/`);