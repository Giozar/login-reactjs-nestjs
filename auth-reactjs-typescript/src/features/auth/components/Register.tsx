import { ChangeEvent, FormEvent, useState } from "react"

export default function Register() {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries( new FormData(e.currentTarget) );

        console.log(data);
        console.log({username, email, password, confirmPassword});
    }
    
    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const usernameValue = e.target.value;
        if( usernameValue )
            setUsername(e.target.value);
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {

        e.preventDefault();
        const emailValue = e.target.value;
        if( emailValue )
            setEmail(emailValue);
        console.log(emailValue);
    }

    const handleChangePassword = ( e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const passwordValue = e.target.value;
        if( passwordValue )
            setPassword(passwordValue);
        console.log(passwordValue);
    }
    const handleChangeConfirmPassword = ( e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const confirmPasswordValue = e.target.value;
        if( confirmPasswordValue )
            setConfirmPassword(confirmPasswordValue);
        console.log(confirmPasswordValue);
    }

    
    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre completo</label>
                <input type="text" id="username" name="username" onChange={handleChangeUsername} />
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" onChange={handleChangeEmail}/>
                <label htmlFor="password">contraseña</label>
                <input type="password" id="password" name="password" onChange={handleChangePassword} />
                <label htmlFor="password">Confirmar contraseña</label>
                <input type="password" id="password" name="password" onChange={handleChangeConfirmPassword} />
                <button type="submit">Registrarse</button>
            </form>
        </div>

    )
};
