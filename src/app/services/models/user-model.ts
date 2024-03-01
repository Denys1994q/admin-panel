export interface IUser {
    name: string;
    lastName: string;
    dateOfBirth: string;
    role: string;
    position: string;
}

export interface IAuthedUser {
    first_name: string;
    last_name: string;
    role: string;
    token: string;
}