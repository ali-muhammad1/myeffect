import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Controller, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./signup.module.css";
import { Grid } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import styles from "styled-components"

const DisplayBlock = styles.div`\
displayL block;
`

const Signup = () => {
  const { handleSubmit, control, watch, formState: { errors } } = useForm();
  const pwd = watch('password')
  const onSubmit = data => 
  {
    console.log(data);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00BBF1",
      },
      secondary: {
        main: "#FFD430",
      },
      background: {
        main: "#FBFBFB",
      },
      text: {
        main: "#656565",
      },
      error: {
        main: "#FF3E1D",
      },
    },
  });

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e5e5e5",
        borderRadius: "50px",
      },

      "&:hover fieldset": {
        borderColor: "#e5e5e5",
        bgcolor: theme.palette.background.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  });

  return (
    <>
      <Box className={style.SignupPage} component="div">
        <Box
          sx={{ bgcolor: theme.palette.background.main }}
          className={style.SignupWrapper}
          component="div"
        >
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{ color: theme.palette.text.main }}
                  component="h2"
                  gutterBottom
                  variant="h4"
                >
                  Sign up
                </Typography>
                <Typography
                  sx={{ color: theme.palette.text.main }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  Get started today to build a better future.Track and share in
                  your community with My Effect
                </Typography>
              
                  <form  onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Box sx={{ mt: 1 }}>
                    <Grid container spacing={2} className={style.dflex}>
                      <Grid item xs={12} md={6}>
                      <Controller
                        name={"firstName"}
                        rules={{ required: true  }}
                        control={control}
                        render={({  field: { onChange, value }  , fieldState    }) =>{
                        return (
                          <>
                          <CssTextField
                          onChange={onChange} value={value || ''}
                          margin="normal"
                          fullWidth
                          type="text"
                          id="firstName"
                          label="First Name"
                          className={style.inputRounded}
                        />
                        {fieldState.invalid ?  <span id="dd" className="dd" ><ErrorIcon className="mr-1"/> Frist name is required.</span> : null} 
                        </>
                        )}}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                      <Controller
                        name={"lastName"}
                        rules={{ required: true  }}
                        control={control}
                        render={({ field: { onChange, value }, fieldState }) => (
                          <>
                        <CssTextField
                          margin="normal"
                          onChange={onChange} value={value || ''}
                          fullWidth
                          type="text"
                          id="lastName"
                          label="Last Name"
                          className={style.inputRounded}
                        />
                        {fieldState.invalid ?  <span id="dd" className="dd" > <ErrorIcon className="mr-1"/> Last name is required.</span> : null} 
                          </>
                        )}
                      />
                      </Grid>
                    </Grid>
                    <Controller
                      name={"email"}
                      control={control}
                      rules={{ required: true ,  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }}
                      render={({ field: { onChange, value }, fieldState }) => {
                      return (
                        <>
                        <CssTextField
                        margin="normal"
                        fullWidth
                        onChange={onChange} value={value || ''}
                        id="email"
                        type="email"
                        label="Email Address"
                        autoComplete="email"
                        required
                        className={style.inputRounded}
                      />
                      {fieldState.invalid  ?  <span id="dd" className="dd" > <ErrorIcon className="mr-1"/> {fieldState.error.type === 'pattern' ? "Invalid Email" : " Email is required. please enter an email" }   </span> : null} 
                      </>
                      ) }}
                    />
                  <Controller
                    name={"password"}
                    control={control}
                    rules={{ required: true  }}
                    render={({ field: { onChange, value } , fieldState }) => (
                      <>
                      <CssTextField
                      margin="normal"
                      fullWidth
                      onChange={onChange} value={value || ''}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      className={style.inputRounded}
                    />
                    {fieldState.invalid  ?  <span id="dd" className="dd" > <ErrorIcon className="mr-1"/> Password is required.</span> : null} 
                      </>
                    )}
                  />
                      <Controller
                        name={"confirmPassword"}
                        control={control}
                        rules={{
                           required: true ,
                           validate: value => value === pwd || 'The password do not match'
                           }}
                       
                        render={({ field: { onChange, value },fieldState }) => (
                          <>
                        <CssTextField
                          margin="normal"
                          fullWidth
                          onChange={onChange} value={value || ''}
                          label="Confirm Password"
                          type="password"
                          id="confirmPassword"
                          autoComplete="current-password"
                          className={style.inputRounded}
                          />
                          {fieldState.invalid  ?  <span id="dd" className="dd" > <ErrorIcon className="mr-1"/> {fieldState.error.message || " Confirm password is required."}</span> : null} 
                        </>
                        )}
                      />
                    <FormControlLabel
                      sx={{ color: theme.palette.text.main, mt: 2 }}
                      control={
                        <Controller
                        name={"remember"}
                        rules={{
                          required: true,
                        }}
                        control={control}
                        render={({ field: { onChange, value },fieldState }) => (
                          <>
                          <Checkbox
                          value="remember"
                          color="primary"
                          checked={value}
                          onChange={onChange}
                          sx={{
                            color: theme.palette.primary.main,
                            "&.Mui-checked": {
                              color: theme.palette.primary.main,
                            },
                            pt: 0,
                            pb: 1.7,
                          }}
                        />
                         <Typography
                          variant="body2"
                          color={theme.palette.text.main}
                        >
                          I have read and accept MyEffects's Terms & Condition
                          and Privacy Policy
                        </Typography>
                        </>

                        )}

                      />
                      }
                      label={
                        <Typography
                          variant="body2"
                          color={theme.palette.text.main}
                        >
                        </Typography>
                      }
                    />
                     {errors.remember  ?  <p id="dd" className="dd" > <ErrorIcon className="mr-1"/> Check required</p> : null} 
                   
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                          mt: 3,
                          mb: 2,
                          maxWidth: 200,
                          bgcolor: theme.palette.secondary.main,
                          borderRadius: "50px",
                          "&:hover": {
                            background: "#fcce1f",
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Box>
                  </form>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
