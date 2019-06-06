import styled from 'styled-components';



export const Avatar = styled.img `
width:30px;
            height:30px;
            border-radius:50%;
`;


export const PostImage = styled.img `
width:100%;
        padding:2px;
        box-sizing: border-box;
`;


export const Button = styled.button `
padding:.5em 1em;
border-radius:10px;
font-size:1.2em;
box-sizing:border-box;

&:hover{
    background:white;
    color:skyblue;
    border:1px solid skyblue;
}

${props => (props.type === 'primary' ?
`
background: skyblue;
color:white;

` : null)}
`;

export const Header = styled.header `
display:flex;
        align-items: center;
        padding:.3em 1em;
`

export const HeaderUsername = styled.p `
padding-left:.5em;
font-weight:bold;
`


export const Input = styled.input `
padding:1em;
border-radius:5px;
font-size:1.1em;
margin-bottom:30px;
box-sizing: border-box;

&::placeholder{
    
    color:gray;
}

${props => (props.type === 'ciInput' ?
`
width:90%;
margin-bottom:0;
padding:.5em;

` : null)}

`



export const LoginForm = styled.form `
background:white;
    width:500px;
    padding:40px;
    margin:0 auto;
    margin-top:20%;
    text-align:center;
    border-radius:10px;
    box-sizing: border-box;
`

export const Postcontainer = styled.div `
background:white;
    margin:.7em auto;
    padding-bottom:.5em;
    width:50%;
`


export const PostStatusContainer = styled.div `
        display:flex;
        flex-direction: column;
        padding:.3em 1em;
`


///////////////////////////////////////////////////////////

//Comment Section

////////////////////////////////////////

export const CommentCont = styled.div `
margin-left:1em;
`
export const Comment = styled.span `
font-size:.9em;
margin-left:1em;
`

export const Commenter = styled.span `
font-weight:bold;
`

export const Commenttext = styled.span `
font-size:.9em;
margin-left:1em;
`