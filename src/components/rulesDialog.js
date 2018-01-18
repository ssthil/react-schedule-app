import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RulesInfo from './rulesInfo'

class RulesDialog extends Component{

    state = {
        open: true
    }

    handleOpen = () => {
        this.setState({
            open:true
        })
    }

    handleClose = () => {
        this.setState({
            open:false
        })
    }

    render() {
        const actions = [
            <FlatButton 
            label="Close"
            primary={true}
            onClick={this.handleClose}/>
        ]
        return(
            <div>
                <Dialog 
                    title="Rules and Format" 
                    model={false} 
                    actions={actions}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}>
                    <RulesInfo />
                </Dialog>
            </div>
        )
    }
}

export default RulesDialog;