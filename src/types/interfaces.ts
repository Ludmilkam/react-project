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
    // использовать ICategory
    tag: {id: number;
        name: string;
    };
}

export interface ICategory {
    id: number;
    name: string;
}
// лучше дописать ILoginForm
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
