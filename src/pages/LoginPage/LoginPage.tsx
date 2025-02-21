import { useForm } from "react-hook-form";
import { ILogin } from "../../types/interfaces";

const { register, handleSubmit, formState, clearErrors } = useForm<ILogin>({
    mode: "onSubmit",
});

const onSubmit = (data: ILogin) => {
    console.log(data);
};
export function LoginPage() {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input
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
                        onFocus={() => {
                            clearErrors("email");
                        }}
                    />
                    <p>{formState.errors.email?.message}</p>
                </label>
                <label>
                    Password:
                    <input
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
