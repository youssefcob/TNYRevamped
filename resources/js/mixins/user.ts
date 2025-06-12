
type User = {
    email: string;
    name: string;
    user_type: string;
}

type Token = {
    access_token: string;
    token_type: string;
    expires_at: number;
    scopes: string[];
}

export default {
    setToken: (data: Token) => {
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('tokenExpiry', data.expires_at.toString())
    },
    token: (() => {
        return localStorage.getItem('token');
    }),
    set: (data: User) => {
        localStorage.setItem('user', JSON.stringify(data))
    },
    get: (() => {
        let user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    })

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

