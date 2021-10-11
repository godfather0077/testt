import React  from "react";
import Head from "next/head";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Script from 'next/Script';



function Login() {
    const validationSchema = Yup.object().shape({
        
        
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            
        
            .required('Password is required'),
        });
        const formOptions = { resolver: yupResolver(validationSchema) };
    
        
        
        const { register, handleSubmit, reset, formState } = useForm(formOptions);
        const { errors } = formState;
    
        function onSubmit(data) {
            
            
            alert('login successfull :-)\n\n' + JSON.stringify(data, null, 4));
            return false;
        }

    
    
        return (<>
            <Head>
        
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        
        <link rel="stylesheet" href=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    
           
           
            
       
  
  
            
        </Head>
        
        
        <Script src=
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
           
           
            <Script src=
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"/>
            
            
            <Script src=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"/>
            
        <div className="bodyy">
       
       <p>.</p>

        <div className="card">
            <h5 className="card-header">Please Login</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    
                    
                    
                        <div className="form-row">
                            <label>Email</label>
                            <input  name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        
                    
                    
                        <div className="form-group col">
                            <label>Password</label>
                            <input  name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        
                        
                    </div>
                    
                        
                    <div className="form-group">
                        <button type="submit" className="submit">Login</button>
                       
                       
                    </div>
                </form>
            </div>
        </div>
        <p>.</p>

        </div>
        
        
        
        </>
        );
    
}
export default Login;