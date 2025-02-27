import { useForm } from "react-hook-form";
import { ILogin } from "../../types/interfaces";
import "./LoginPage.css"
import { Link } from "react-router-dom";


export function LoginPage() {
    // не используешь clearErrors
    const { register, handleSubmit, formState, clearErrors } = useForm<ILogin>({
        mode: "onSubmit",
    });
    
    const onSubmit = (data: ILogin) => {
        console.log(data);
    };
    return (
        <div>
            {/* поменять form */}
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    Email:
                    <input
                    className="login-input"
                        type="email"
                        {...register("email", {required: {value: true, message: "Field is required"}, 
                            minLength: {value: 7, message: "Length should be > 7"}, 
                            maxLength: {value: 50,message: "Length should be < 50"},
                        })}
                    
                    />
                    {/* p из label лучше убрать */}
                    <p>{formState.errors.email?.message}</p>
                </label>
                <label>
                    Password:
                    <input
                        className="login-input"
                        type="password"
                        {...register("password", {
                            required: {value: true,message: "Field is required"},minLength: {value: 10,message: "Length should be > 10"},
                            maxLength: {value: 50,message: "Length should be < 50"},
                        })}
                    />
                </label>
                <p>{formState.errors.email?.message}</p>
                {/* label не надо */}
                <label><button type="submit" className="btn-login">Submit</button></label>
                {/* label не надо */}
                <Link to="/register"><label>register</label></Link>

            </form>
        </div>
    );
}
