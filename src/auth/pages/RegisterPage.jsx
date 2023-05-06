import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: 'correo@correo.com',
  password: '123456',
  displayName: 'Nombre'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Registrarse">
        <form
          onSubmit={(e) => onSubmit(e)}
        >
          <Grid container>
          <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                label="Nombre" 
                type="text" 
                placeholder="Ingrese su nombre completo" 
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!displayNameValid}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="Ingrese su email" 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!emailValid}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Ingrese su contraseña" 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!passwordValid}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} justifyContent="center" sx={{ my:1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="contained" 
                  type='submit'
                  fullWidth 
                >
                <Typography>Crear cuenta</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography mr={1}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} to="/auth/login">
                Ingresar
              </Link> 
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
