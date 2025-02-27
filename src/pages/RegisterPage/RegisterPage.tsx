import { useForm } from "react-hook-form";
import { IRegister } from "../../types/interfaces";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

export function RegisterPage() {
    // 
    const { register, handleSubmit, formState, clearErrors } =
        useForm<IRegister>({
            mode: "onSubmit",
        });

    const onSubmit = (data: IRegister) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    Email:
                    <input
                    className="register-input"
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Field is required",
                            },
                            minLength: {
                                value: 7,
                                message: "Length should be > 7",
                            },
                            maxLength: {
                                value: 50,
                                message: "Length should be < 50",
                            },
                        })}
                    />
                    <p>{formState.errors.email?.message}</p>
                </label>
                <label>
                    Username:
                    <input
                    className="register-input"
                        type="email"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Field is required",
                            },
                            minLength: {
                                value: 7,
                                message: "Length should be > 7",
                            },
                            maxLength: {
                                value: 50,
                                message: "Length should be < 50",
                            },
                        })}
                    />
                    <p>{formState.errors.email?.message}</p>
                </label>
                <label>
                    Password:
                    <input
                    className="register-input"
                        type="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Field is required",
                            },
                            minLength: {
                                value: 10,
                                message: "Length should be > 10",
                            },
                            maxLength: {
                                value: 50,
                                message: "Length should be < 50",
                            },
                        })}
                    />
                </label>
                <p>{formState.errors.email?.message}</p>
                {/* <label>
                    Description:
                    <textarea
                        {...register("description", {
                            maxLength: {
                                value: 1000,
                                message: "Length should be < 1000",
                            },
                        })}
                    />
                </label> */}
                {/* label не надо */}
                <label>
                    <button type="submit" className="btn-register">
                        Submit
                    </button>
                </label>
                <Link to="/login">
                    <label>login</label>
                </Link>
            </form>
        </div>
    );
}
