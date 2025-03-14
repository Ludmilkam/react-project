import { useForm } from "react-hook-form";
import { ILoginForm } from "../../types/interfaces";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useUserContext } from "../../context/UserContext";

export function LoginPage() {
    useTitle("Login Page");
    const { register, handleSubmit, formState } = useForm<ILoginForm>({
        mode: "onSubmit",
    });
    const { login: userLogin } = useUserContext();
    const onSubmit = async (data: ILoginForm) => {
        userLogin(data.email, data.password);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <label>
                    Email:
                    <input
                        className="login-input"
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
                    Password:
                    <input
                        className="login-input"
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
                <div className="log-div">
                    <button type="submit" className="btn-login">
                        Submit
                    </button>
                </div>

                <Link to="/register">
                    <label>register</label>
                </Link>
            </form>
        </div>
    );
}
