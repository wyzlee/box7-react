const config = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
    WS_BASE_URL: process.env.REACT_APP_WS_BASE_URL || 'ws://localhost:8000',
    DEBUG: process.env.NODE_ENV !== 'production',
    logRequests: true,  // Activer/désactiver les logs de requêtes
    logAuth: true,      // Activer/désactiver les logs d'authentification
};

// Helper pour les logs
config.log = (type, ...args) => {
    if (config.DEBUG && ((type === 'request' && config.logRequests) || 
                        (type === 'auth' && config.logAuth))) {
        console.log(`[${type.toUpperCase()}]`, ...args);
    }
};

export default config;