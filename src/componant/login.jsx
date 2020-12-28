import React, { Component } from 'react';
import Cal from './Cal';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            tmp: 1,
        }
    }

    render() {
        return (
            <>
<center>            <table >
                <tr>
              <td className="padding-left"> Enter I'd : </td>
               <td><input className="abc"></input></td>
               </tr>
               <tr>
                   <td className="padding-left">Enter password :</td>
                   <td> <input type="password" ></input></td>
                  
               </tr>
               <tr>
                <center>   <td> <button className="link primary-link2" > Login</button></td></center>

                
               </tr>

            </table>
            </center>

            <Cal
                number={5}
            />
            </>
        )
    }
}

export default Login;