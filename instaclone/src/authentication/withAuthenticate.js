

import React from 'react';

const WithAuthenticate = FirstComp => SecondComp =>

        class extends React.Component{

            constructor(props){
                super(props)

                this.state={
                    loggedIn:Boolean
                }
            }
            
            render(){
                if(localStorage.getItem('username')){
                    return <FirstComp />;
                }else{
                    return <SecondComp />;
                    
                }
            }
        }



export default WithAuthenticate;