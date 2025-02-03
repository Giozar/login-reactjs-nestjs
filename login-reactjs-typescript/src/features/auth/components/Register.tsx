export default function Register() {
    
    return (
        <div>
            <h2>Registro</h2>
            <form>
                <label htmlFor="username">Nombre completo</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">contraseña</label>
                <input type="password" id="password" name="password" />
                <label htmlFor="password">Confirmar contraseña</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Registrarse</button>
            </form>
        </div>

    )
};
