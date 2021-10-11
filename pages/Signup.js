import React from "react";
import Head from "next/head";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import Script from 'next/Script';
function Signup() {
    
    
    const validationSchema = Yup.object().shape({
        
        
        Name: Yup.string()
            .required(' Name is required'),
       
            
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Please accept and conditions terms to continue ...')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    
    
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        
        
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        
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
            <h5 className="card-header">Please Sign Up</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  
                  
                    <div className="form">
                    <div className="form-group col">
                            <label>Name</label>
                            <input name="Name" type="text" {...register('Name')} className={`form-control ${errors.Name ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.Name?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Date of Birth</label>
                            <input name="dob" type="date" {...register('dob')} className={`form-control ${errors.dob ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.dob?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Email</label>
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form">
                        <div className="form-group col">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit">Register</button>
                        <button type="button" onClick={() => reset()} className="reset">Reset</button>
                        <Link href="/Login"><button  className="login">Login</button></Link>
                    </div>
                </form>
            </div>
        </div>
        <p>.</p>

</div>
        </>
    );
}

export default Signup;