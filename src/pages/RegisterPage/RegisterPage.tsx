import { useForm } from "react-hook-form";
import { IRegisterForm } from "../../types/interfaces";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export function RegisterPage() {
    useTitle("Register Page")
    const { register, handleSubmit, formState} =
        useForm<IRegisterForm>({
            mode: "onSubmit",
        });

    const onSubmit = async(data: IRegisterForm) => {
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
                    <button type="submit" className="btn-register">
                        Submit
                    </button>
                <Link to="/login">
                    <label>login</label>
                </Link>
            </form>
        </div>
    );
}
