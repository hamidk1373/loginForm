import {  makeStyles } from '@material-ui/core/styles'
// import { createMuiTheme } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'



// export const Theme = createMuiTheme({
//     overrides: {
//         MuiButton: {
//         Button,
//                 text:{
//                 background: 'linear-gradient(45deg, #4dd0e1 30%, #9c27b0 90%)',
//                 borderRadius: 20,
//                 border: '1px ',
//                 color: 'white',
//                 height: 40,
//                 padding: '0 30px',
//                 boxShadow: '1px 1px 3px 2px rgba(255, 105, 135, .3)',
               
//                 // position:'absolute',
//                 // left:50,
//                 // top:420,
//                 outline:'none !important',
//                 width:'20rem', 
//                 fontSize:20,
               
//             },
    
//         },
//       },
//     },
//   );

  



export const useStyles = makeStyles({
    
    container:{
        margin: '0 auto',
        width: 403,
        position: 'relative',
        
    },

    loginForm:{
        border: '1px solid #c5c1c9',
        height:450,
        width:336,  
        marginTop: 120,
        padding: '63px 40px 0px;',
        borderRadius: '.8rem', 
    },

    header:{
        position:'absolute',
        marginTop:10,
        marginLeft:155,
        fontWeight: 'bold',
        fontSize:30,
        color:'#4a148c',
    },

    fullName:{
        width:'21rem',  
    },

    address:{
        width:'21rem', 
    },

    username:{
        width:'21rem',  
    },

    password:{
        width:'21rem',    
    },

    

    signUpButton:{
        
        minHeight: '44px',
        padding: 0,
        border: 0,
        marginTop:10,
        outline:'none !important',
        width:'21rem',
        fontSize:18, 
        borderRadius:'1rem',
        background:'linear-gradient(45deg, #4dd0e1 30%, #9c27b0 90%)',
    },

    textBottom:{
        position:'absolute',
        top: 475,
        left: 90,
    },

    signInUp:{
        position:'absolute',
        top:475,
        left:280,
        cursor:'pointer'
    },

          
    agreeTerm:{
        marginTop: 15,
        marginLeft: 32,
    },
    
    svg:{
    transform: 'none',
    transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    }
});