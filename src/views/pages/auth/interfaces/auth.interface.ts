export interface SignUpLoginInterface {
    emailAddress: string;
    password: string;
}

export interface ForgotPasswordInterface {
    email: string;
}

export interface NotifyInterface {
    email: string;
}

export interface AuthState {
    signup: SignUpLoginInterface,
    login: SignUpLoginInterface,
    forgotPassword: ForgotPasswordInterface,
    notify: NotifyInterface
}

export const authInitialState = {
    login: {
        email: '',
        password: '',
    },
    forgotPassword: {
        email: '',
    },
    signup: {
        email: '',
        password: '',
        // confirmPassword: '',
    },
    notify: {
        email: ''
    }
}