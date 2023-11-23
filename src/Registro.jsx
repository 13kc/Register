import React from 'react';

class Registro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            apellido:'',
            email:'',
            telefono:'',
            password:'',
            confirmPassword:'',
        };
    }


handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
};

render() {
    return (
        <div>
            <h2>Registro</h2>
            <form>
                <label>
                    Nombre:
                    <input 
                    type="text"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                    placeholder="Ingrese su nombre..."
                     />
                </label>
                <br />

                <label>
                    Apellido:
                    <input 
                    type="text"
                    name="apellido"
                    value={this.state.apellido}
                    onChange={this.handleChange} 
                    placeholder='Ingrese su apellido...'
                    />
                </label>
                <br />

                <label>
                    Email:
                    <input 
                    type="email"
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    placeholder='Ingresar correo electronico...'
                    />
                </label>
                <br />

                <label>
                    Telefono:
                    <input 
                    type="tel" 
                    name="telefono"
                    value={this.state.telefono}
                    onChange={this.handleChange}
                    placeholder='Ingrese su numero de telefono'
                    />
                </label>
                <br />

                <label>
                    Contraseña: 
                    <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder='Ingrese su contraseña' 
                    />
                </label>

                <label>
                    Confirmar Contraseña: 
                    <input 
                    type="password" 
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    placeholder='Confirme su contraseña'
                    />
                </label>
                <br />

                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}
}

export default Registro;