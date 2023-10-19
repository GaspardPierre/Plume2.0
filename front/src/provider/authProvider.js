// authProvider.js
import { login, logout } from '../reducers/member';
import store from '../store/store'; 

const authProvider = {
    login: async ({ username, password }) => {
        try {
            const response = await store.dispatch(login({ email : username, password }));
            if (response.error) {
                return Promise.reject(response.error);
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    checkError: async (error) => {
        // ... votre logique
        return Promise.resolve();
    },
    checkAuth: async () => {
        const { role } = store.getState().member;
        return role ? Promise.resolve() : Promise.reject();
    },
    logout: async () => {
        try {
            await store.dispatch(logout());
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: async () => {
        const { role } = store.getState().member;
        return Promise.resolve(role);  // Return the role of the member as permissions
    }
};

export default authProvider;
