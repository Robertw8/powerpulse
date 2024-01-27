import{w as r,x as m,P as p,W as l,t as c,h,i as t,e as o,k as u,j as a,l as x,m as g,F as w,y as f,p as i,q as j,c as S,L as b,z as I,r as y,f as P,g as A}from"./index-QfM5dVvM.js";import{u as v}from"./formik.esm-GhlhTUBo.js";import{A as C,S as k}from"./WelcomeImg-NUYtnFiB.js";const T=r(m)`
  margin-top: 90px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`,U=r(p)`
  height: 36px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    width: 496px;

    margin-bottom: 32px;
    font-size: 16px;
    color: rgba(239, 237, 232, 0.3);
  }
`,B=r(l)`
  gap: 14px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 0px;
  }
`,E=r(c)`
  margin-top: 12px;
`,z=r.div`
  position: absolute;

  @media screen and (max-width: 768px) {
    bottom: -103%;

    leftt: 0%;

    transform: translate(-20%) scale(0.6);
  }

  @media screen and (min-width: 769px) and (max-width: 1439px) {
    top: 110%;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    top: 31.7%;
    right: -872px;
    scale: 0.95;
  }
`,F=h().shape({email:t().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).required("❌ Invalid email format"),password:t().min(6).required("❌ Password is too short - should be 6 characters minimum")}),W=()=>{const{isLoading:s}=o(),n=u(),e=v({initialValues:{email:"",password:""},validationSchema:F,onSubmit:async d=>{await n(I(d))}});return a.jsxs(x,{children:[a.jsxs(g,{children:[a.jsx(T,{children:"Sign In"}),a.jsx(U,{children:"Welcome! Please enter your credentials to login to the platform:"}),a.jsxs(w,{onSubmit:e.handleSubmit,children:[a.jsxs(B,{children:[a.jsx(f,{bordercolor:e.errors.email&&e.touched.email?"error":"default",id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email}),e.errors.email&&e.touched.email&&a.jsx(i,{children:e.errors.email}),a.jsx(j,{bordercolor:e.errors.password&&e.touched.password?"error":"default",id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password}),e.errors.password&&e.touched.password&&a.jsx(i,{children:e.errors.password})]}),a.jsx(S,{htmlType:"submit",type:"primary",loading:s,children:"Sign In"}),a.jsxs(E,{children:["Don’t have an account? ",a.jsx(b,{to:"/signup",children:"Sign Up"})]})]})]}),a.jsx(C,{}),a.jsx(z,{children:a.jsx(k,{})})]})},D=()=>{const{isRefreshing:s}=o();return y.useEffect(()=>{if(s){const n=setTimeout(()=>{P("loading","If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.")},5e3);return()=>clearTimeout(n)}},[s]),a.jsx(A,{children:a.jsx(W,{})})};export{D as default};
