export interface IOkWithData<T> {
    status: string;
    data: T;
}

export interface IOk {
    status: string;
    message: string;
}

export interface IError {
    status: string;
    message: string;
}

export interface IPost {
    id: number;
    name: string;
    description: string;
    // cover_image: string
    time_publicated: number;
    author: string;
    comments: [];
    tags: string;
}

export interface ICategories {
    id: number;
    name: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    username:string;
    email: string;
    password: string;
    description: string;
}
