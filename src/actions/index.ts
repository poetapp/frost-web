export namespace Actions {
    export namespace SignUp {
        export const SIGN_UP = 'SIGN_UP';
        export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
        export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
        export const onSignUp = (payload?: object) => ({
            type: SIGN_UP,
            payload,
        });
    }
}
