import { makeStyles } from '@material-ui/core/styles'
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





export const useStyles = makeStyles((theme) => ({

    container: {

        margin: "0 auto",
        width: "30vw",
        marginTop: 120,
        padding: "30px 40px 20px",
        [theme.breakpoints.down("lg")]: {
            width: "30vw",
        },
        [theme.breakpoints.down("md")]: {
            width: "55vw",
        },
        [theme.breakpoints.down("sm")]: {
            width: "65vw",
        },
        [theme.breakpoints.down("xs")]: {
            width: "70vw",
            marginTop: 20,
            padding: "20px 30px 10px",
        },
    },


    registerForm: {

    },
    gender: {

    },
    header: {
        textAlign: "center",
        color: "#4a148c",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20
        },
    },

    textfieldInfoRegister: {

        marginTop: '1.1rem',
        [theme.breakpoints.down("xs")]: {

        },
    },

    // resize: {
    //     fontSize: 5
    // },
    street: {
        marginTop: '1.1rem',
        width: '78%',
        marginRight: '2%',
        [theme.breakpoints.down("xs")]: {
            width: '68%'
        },
    },

    streetNumber: {
        marginTop: '1.1rem',
        width: '20%',
        [theme.breakpoints.down("xs")]: {
            width: '30%'
        },
    },

    postCode: {
        marginTop: '1.1rem',
        width: '20%',
        marginRight: '2%',
        [theme.breakpoints.down("xs")]: {
            width: '30%'
        },
    },

    city: {
        marginTop: '1.1rem',
        width: '78%',
        [theme.breakpoints.down("xs")]: {
            width: '68%'
        },
    },

    phone: {
        marginTop: '1.1rem',
        marginRight: '2%',
        width: '49%',
        [theme.breakpoints.down("xs")]: {
            width: '48%',
            marginRight: '4%',
        },

    },


    birthday: {
        marginTop: '1.1rem',
        width: '49%',
        [theme.breakpoints.down("xs")]: {
            width: '48%'
        },
    },
    signUpButton: {

        background: "linear-gradient(45deg, #4dd0e1 30%, #9c27b0 90%)",
        borderRadius: "1rem !important",
        fontSize: "15px !important",
        marginTop: "20px!important",
    },

    textHaveAccount: {
        marginTop: 16,
        textAlign: "center",
        color: "grey",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
    },

    signIn: {
        marginLeft: 10,
        cursor: 'pointer'
    },


    agreeTerm: {
        textAlign: "center",
        marginTop: 8,
        [theme.breakpoints.down("xs")]: {
            fontSize: 13
        },

    },

    svg: {
        transform: 'none',
        transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    }
}));