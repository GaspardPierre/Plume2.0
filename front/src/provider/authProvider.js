import { login, logout } from '../reducers/member';
import { store } from '../store/store'; 

console.log("je suis dans le authProvider");

const authProvider = {
    login: async ({ username, password }) => {
        try {
            const response = await store.dispatch(login({ email: username, password }));
            if (response.error) {
                return Promise.reject(response.error);
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    checkError: async (error) => {
        const status = error.status || (error.response && error.response.status);
        if (status === 401 || status === 403) {
            // Invalid Token or expired
            await store.dispatch(logout()); // Trigger the logout
            localStorage.removeItem('token'); // Clean the localStorage
            return Promise.reject(new Error('Session expirée, veuillez vous reconnecter.'));
        }
        return Promise.resolve();
    },
    checkAuth: async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return Promise.reject(new Error('Aucun token trouvé, authentification requise.'));
        }
        return Promise.resolve();
    },
    logout: async () => {
        try {
            await store.dispatch(logout());
            localStorage.removeItem('token'); 
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: async () => {
        const state = store.getState();
        const { user } = state.member;
        return user ? Promise.resolve(user.role) : Promise.reject('No user logged in');
    }
};

export default authProvider;
