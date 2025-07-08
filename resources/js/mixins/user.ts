
export type User = {
    email: string;
    name: string;
    user_type: string;
}

export type Token = {
    access_token: string;
    token_type: string;
    expires_at: number;
    scopes: string[];
}

export default {
    setToken: (data: Token) => {
        localStorage.setItem('token', data.access_token);
    },
    token: (() => {
        return localStorage.getItem('token')
    }),
    set: (data: User) => {
        localStorage.setItem('user', JSON.stringify(data))
        window.dispatchEvent(new Event('user-updated'));
    },
    get: (() => {
        let user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }),

    loggedIn: () => {
        const token = (() => {
            const cookie = document.cookie.match(/token=([^;]+)/);
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            if (cookie && token && user) {
                return true;
            }
            return false;
        }
        )();

        const tokenExpired = (() => {
            const tokenInfoStr = localStorage.getItem('token_info');
            if (!token || !tokenInfoStr) {
                return false;
            }
            const tokenInfo: Token = JSON.parse(tokenInfoStr);
            return tokenInfo.expires_at > Date.now();
        })();

        if (token && !tokenExpired) {
            return true;
        } else {
            return false;
        }

    },
    type: (() => {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            return parsedUser.user_type || '';
        }
        return '';
    }),


    // user: (() => {
    //     const userStr = localStorage.getItem('user');
    //     return userStr ? JSON.parse(userStr) as User : {
    //         email: '',
    //         name: '',
    //         user_type: ''
    //     } as User;
    // })(),

    // token_info: (() => {
    //     const tokenStr = localStorage.getItem('token_info');
    //     return tokenStr ? JSON.parse(tokenStr) as Token : {
    //         access_token: '',
    //         token_type: '',
    //         expires_at: 0,
    //         scopes: []
    //     } as Token;
    // })(),

    // set(res: { user: User, token: Token }) {

    //     this.user = res.user;
    //     this.token_info = res.token;

    //     localStorage.setItem('user', JSON.stringify(this.user));
    //     localStorage.setItem('token_info', JSON.stringify(this.token_info));
    // },

    // token(){
    //     return this.token_info.access_token;
    // },

    // tokenIsExpired() {
    //     return this.token_info.expires_at < Date.now();
    // },
    // type(){
    //     return this.user.user_type;
    // }


}

