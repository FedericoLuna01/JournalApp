import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )

  const dispatch = useDispatch()

  const { email, password, onInputChange} = useForm({
    email: 'correo@correo.com',
    password: '123456'
  })

  const isAuthtenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    dispatch(checkingAuthentication())

  }

  const onGoogleSignIn = () => {
    console.log('ongoogle')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
        <form
          onSubmit={onSubmit}
        >
          <Grid container>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="Ingrese su email" 
                fullWidth
                name='email'
                onChange={onInputChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Ingrese su contraseña" 
                fullWidth
                name='password'
                onChange={onInputChange}
                value={password}
              />
            </Grid>
            <Grid container spacing={2} sx={{ my:1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={isAuthtenticating}
                  type="submit"   
                  variant="contained" 
                  fullWidth 
                >
                <Typography>Login</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={isAuthtenticating}
                  variant="contained" 
                  fullWidth 
                  onClick={onGoogleSignIn}
                >
                  <Google />
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} to="/auth/register">
                Crear una cuenta
              </Link> 
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
