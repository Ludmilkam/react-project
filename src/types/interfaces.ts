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
    author: string;
    comments: [];
    tag: {id: number;
        name: string;
    };
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegisterForm {
    username:string;
    email: string;
    password: string;
    description: string;
    image: string;
}
