import {Container,Box, Typography,TextField, Button, Link} from '@mui/material' 

const Signin =()=>{

    return(
        <Container maxWidth="xs">
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    mt:8
                }}
            >
                <Typography 
                    component="h1"
                    variant="h5"
                    align='center'
                >Sign in</Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus

                    label="E-mail"
                    id="email"
                    name="email"
                    type="email"
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx=
                    {{
                        my:2
                    }}
                >
                    Sign in
                </Button>

                <Box 
                    sx={{
                        display:'flex',
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}
                >
                    <Link
                        underline='none'
                        href='#'
                    >
                        Esqueceu a senha?
                    </Link>
                    <Link
                        underline='none'
                        href='#'
                    >
                        Registre-se
                    </Link>
                </Box>

            </Box>
        </Container>
    )

}

export default Signin