import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn:null}

    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '558926614908-lfjisp9v2b95jmfu6k8ljmulsgfinv7l.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.state.isSignedIn ===null){
            return <div>google</div>;
        }else if (this.state.isSignedIn){
            return (
                <div>
                    <button onClick={this.onSignOut} type="primary" htmlType="submit" className="login-form-button">
                    <i className={'google icon'} />
                    Sign Out
                    </button>
                </div>

            );
        }else{
            return  (
                <div>
                    <button onClick={this.onSignIn} type="primary" htmlType="submit" className="login-form-button">
                        <i className={'google icon'} />
                        Sign In
                    </button>
                </div>
            );
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}
export default GoogleAuth;