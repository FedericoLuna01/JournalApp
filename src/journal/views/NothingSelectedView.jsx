import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent={"center"}
        sx={{
            minHeight: '100vh',
            backgroundColor: 'primary.main',
        }}
    >
        <Grid item>
            <StarOutline 
                sx={{
                    fontSize: 100,
                    color: 'primary.contrastText',
                }}
            />
        </Grid>
        <Grid item>
            <Typography
                variant="h4"
                sx={{
                    color: 'primary.contrastText',
                }}
            >Selecciona para empezar</Typography>
        </Grid>
    </Grid>
  )
}
