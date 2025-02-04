import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const emailValue = e.target.value;
        if( emailValue )
            setEmail(emailValue);
        console.log(emailValue);
        
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const passwordValue = e.target.value;
        if( passwordValue )
            setPassword(passwordValue);
        console.log(passwordValue);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const data = Object.fromEntries( new FormData(e.currentTarget));
        console.log(data);

        console.log({ email, password });
    }

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChangeEmail} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" onChange={handleChangePassword} />
                <button type="submit">Iniciar sesión</button>
            </form>

            <p>¿No tienes una cuenta?<a href="/register">Registrarse</a></p>
        </div>
    )
    
};
