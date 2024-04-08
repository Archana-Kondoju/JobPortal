import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
// import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Login = () => {
    const Navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [isRegistering,setIsRegistering]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const userCredential=await signInWithEmailAndPassword(auth,email,password);
          console.log(userCredential);
          const user=userCredential.user;
          localStorage .setItem('token',user.accessToken);
          localStorage.setItem('user',JSON.stringify(user));
          Navigate('/');
        }
        catch(error){
          console.log(error);
        }
      }


      return (
           <section className="h-screen mx-24">
      <div className="h-full mx-15">
        {/* <!-- Left column container with background--> */}
        <div
          className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image" />
          </div>
    
          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* <!--Sign in section--> */}
              <div
                className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 me-4 text-lg">Sign in with</p>
    
    
                {/* <!-- X --> */}
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className=" mx-1 inline-block h-9 w-9 rounded-full bg-blue fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                  {/* <!-- X --> */}
                  <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                </button>
    
              </div>
    
              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p
                  className="mx-4 mb-0 text-center font-semibold dark:text-black">
                  Or
                </p>
              </div>
    
              {/* <!-- Email input --> */}
              
              <div className="relative mb-3" data-twe-input-wrapper-init>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}    
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email Address" />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
                >Email address
              </label>
            </div>
    
              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="Password" />
                <label
                  htmlFor="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
                  >Password
                </label>
              </div>
    
            {/* <!-- confirm Password input --> */}
            {/* <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="confirm Password" />
                <label
                  htmlFor="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
                  >Password
                </label>
              </div> */}
    
              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Login
                </button>
    
                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Need an account?
                  <Link
                   to="/register"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      )
    }

export default Login








// import React, { useState, useEffect } from 'react';
// import {auth} from '../../firebase/firebase.config';

// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
// import { Link, Navigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/authContext/useAuth';
// const Login = () => {
//   console.log(useAuth());
//   // const { userLoggedIn=false } = useAuth();
//   // console.log(userLoggedIn)
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSigningIn, setIsSigningIn] = useState(false);
//   const [error, setError] = useState('');

//   // useEffect(() => {
//   //   if (userLoggedIn) {
//   //     return <Navigate to="/" replace={true} />;
//   //   }
//   // }, [userLoggedIn]);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       try {
//         await doSignInWithEmailAndPassword(email, password);
//       } catch (error) {
//         setIsSigningIn(false);
//         setError(error.message);
//       }
//     }
//   };

//   const onGoogleSignIn = (e) => {
//     e.preventDefault();
//     if (!isSigningIn) {
//       setIsSigningIn(true);
//       doSignInWithGoogle().catch((error) => {
//         setIsSigningIn(false);
//         setError(error.message);
//       });
//     }
//   };

//   return (    
//     <section className="h-screen mx-24">
//   <div className="h-full mx-15">
//     {/* <!-- Left column container with background--> */}
//     <div
//       className="flex h-full flex-wrap items-center justify-center lg:justify-between">
//       <div
//         className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
//         <img
//           src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//           className="w-full"
//           alt="Sample image" />
//       </div>

//       {/* <!-- Right column container --> */}
//       <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
//         <form onSubmit={onSubmit}>
//           {/* <!--Sign in section--> */}
//           <div
//             className="flex flex-row items-center justify-center lg:justify-start">
//             <p className="mb-0 me-4 text-lg">Sign in with</p>


//             {/* <!-- X --> */}
//             <button
//               type="button"
//               data-twe-ripple-init
//               data-twe-ripple-color="light"
//               className=" mx-1 inline-block h-9 w-9 rounded-full bg-blue fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
//               {/* <!-- X --> */}
//               <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512">
//                   {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
//                   <path
//                     d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
//                 </svg>
//               </span>
//             </button>

//           </div>

//           {/* <!-- Separator between social media sign in and email/password sign in --> */}
//           <div
//             className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
//             <p
//               className="mx-4 mb-0 text-center font-semibold dark:text-black">
//               Or
//             </p>
//           </div>

//           {/* <!-- Email input --> */}
          
//           <div className="relative mb-3" data-twe-input-wrapper-init>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
//             id="exampleFormControlInput1"
//             placeholder="Example label" />
//           <label
//             htmlFor="exampleFormControlInput1"
//             className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
//             >Email address
//           </label>
//         </div>

//           {/* <!-- Password input --> */}
//           <div className="relative mb-6" data-twe-input-wrapper-init>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-50 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
//               id="exampleFormControlInput22"
//               placeholder="Password" />
//             <label
//               htmlFor="exampleFormControlInput22"
//               className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-100 dark:peer-focus:text-black"
//               >Password
//             </label>
//           </div>

//           {/* <div className="mb-6 flex items-center justify-between">
//             {/* <!-- Remember me checkbox --> */}
//             {/* <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
//               <input
//                 className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
//                 type="checkbox"
//                 value=""
//                 id="exampleCheck2" />
//               <label
//                 className="inline-block ps-[0.15rem] hover:cursor-pointer"
//                 htmlFor="exampleCheck2">
//                 Remember me
//               </label>
//             </div> */}

//             {/* <!--Forgot password link--> */}
//             {/* <a href="#!">Forgot password?</a>
//           </div> */}

//           {/* <!-- Login button --> */}
//           <div className="text-center lg:text-left">
//             <button
//               type="submit"
//               disabled={isSigningIn}
//               className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//               data-twe-ripple-init
//               data-twe-ripple-color="light">
//               {isSigningIn?'Logging in...':'Login'}
//             </button>

//             {/* <!-- Login link --> */}
//             <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
//               Dont have an account?
//               <Link
//                 to=" Login"
//                 className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
//                  Login</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
//   );
// };

// export default Login;






// {/* // import React, { useState } from 'react'
// // import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBIcon} from 'mdb-react-ui-kit';
// // import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
// // // import app from '../../firebase/firebase.config';
// // import { Link,Navigate } from 'react-router-dom';
// // import { useAuth } from './../../contexts/authContext/index';
// // const Login = () => { */}
// {/* //   const {userLoggedIn=false}=useAuth();
// //   const [email,setEmail]=useState('');
// //   const [password,setPassword]=useState('');
// //   const [isSigningIn,setIsSigningIn]=useState(false);
// //   const [errorMessage,setErrorMessage]=useState('');
// //   // const auth=getAuth();
// //   // const googleProvider = new GoogleAuthProvider();
// //   const onSubmit=async(e)=>{ */}
// {/* //     e.preventDefault();
// //     if(!isSigningIn){
// //       setIsSigningIn(true);
// //       await doSignInWithEmailAndPassword(email,password);
// //     }
// //   }

// //   const onGoogleSignIn=(e)=>{
// //     e.preventDefault();
// //     if(!isSigningIn){
// //     setIsSigningIn(true);
// //     doSignInWithGoogle().catch((error)=>{
// //       setIsSigningIn(false)
// //     })
// //     }
// //   }
// //   // const handleLogin=()=>{
// //   //   signInWithPopup(auth, googleProvider)
// //   //   .then((result) => {
// //   //       const user = result.user;
// //   //       console.log(user)
// //   //     }).catch((error) => {
// //   //       // Handle Errors here.
// //   //       const errorCode = error.code;
// //   //       const errorMessage = error.message;
// //   //       // The email of the user's account used.
// //   //       const email = error.customData.email;
// //   //       // The AuthCredential type that was used.
// //   //       const credential = GoogleAuthProvider.credentialFromError(error);
// //   //       // ...
// //   //     });
// //   // }
// //   return (
// //     <>
    
// //     {userLoggedIn && (<Navigate to={'/'} replace={true}/>)}
// //     <MDBContainer fluid onSubmit={onSubmit}>
// //       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
// //         <MDBCol col='12'>

// //           <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
// //             <MDBCardBody className='p-5 w-100 d-flex flex-column'>

// //               <h2 className="fw-bold mb-2 text-center">Sign in</h2>
// //               <p className="text-white-50 mb-3">Please enter your login and password!</p>

// //               <MDBInput value={email} onChange={(e)=>{setEmail(e.target.value)}} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
// //               <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' autoComplete='current-password' onChange={(e)=> {setPassword(e.target.value)}} size="lg"/>
// //               {
// //                 errorMessage && (<span className='text-red-600 font-bold'>{errorMessage}</span>)
// //               }
// //               <MDBBtn type="submit" disabled={isSigningIn} size='lg'>
// //                 {isSigningIn? 'Logging In' : 'Login'}
// //               </MDBBtn>
// //               <p className='text-center text-sm'>Dont have an account?<Link to='/sing-up'>Sign Up</Link></p>
// //               <hr className="my-4" />

// //               <MDBBtn disabled={isSigningIn} onClick={(e)=>{onGoogleSignIn(e)}} className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
// //                 <MDBIcon fab icon="google" className="mx-2"/>
// //                 Sign in with google
// //               </MDBBtn>

// //             </MDBCardBody>
// //           </MDBCard>

// //         </MDBCol>
// //       </MDBRow>

// //     </MDBContainer>
// //     </>
// //   )
// // }

// // export default Login


//  */}
