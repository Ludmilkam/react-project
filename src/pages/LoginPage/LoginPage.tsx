import { useForm } from "react-hook-form";
import { ILoginForm } from "../../types/interfaces";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export function LoginPage() {
    useTitle("Login Page")
    const { register, handleSubmit, formState } = useForm<ILoginForm>({
        mode: "onSubmit",
    });

    const onSubmit = async(data: ILoginForm) => {
        console.log(data);
        const result = await fetch("http://localhost:8000/api/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
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
                    <button type="submit" className="btn-login">
                        Submit
                    </button>
                <Link to="/register">
                    <label>register</label>
                </Link>
            </form>
        </div>
    );
}
