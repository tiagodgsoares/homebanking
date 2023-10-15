import { environment } from "src/environments/environment";

export const SERVER_ENDPOINTS = {
    ACCOUNT: `${environment.serverURL}/funds`,
    SUBSCRIBE_USER: `${environment.serverURL}/subscribe`,
    LOGIN_USER: `${environment.serverURL}/login`,
}