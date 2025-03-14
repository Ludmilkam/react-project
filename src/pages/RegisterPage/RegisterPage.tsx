import { useForm } from "react-hook-form";
import { IRegisterForm } from "../../types/interfaces";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useUserContext } from "../../context/UserContext";

export function RegisterPage() {
    useTitle("Register Page");
    const { register, handleSubmit, formState } = useForm<IRegisterForm>({
        mode: "onSubmit",
    });
    const { register: userRegister } = useUserContext();

    const onSubmit = async (data: IRegisterForm) => {
        userRegister(data.username, data.email, data.password, data.image);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
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
                </label>
                <p>{formState.errors.email?.message}</p>
                <label>
                    Username:
                    <input
                        className="register-input"
                        type="username"
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
                </label>
                <p>{formState.errors.email?.message}</p>
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
                <div className="reg-div">
                    <button type="submit" className="btn-register">
                        Submit
                    </button>
                </div>

                <Link to="/login">
                    <label>login</label>
                </Link>
            </form>
        </div>
    );
}
