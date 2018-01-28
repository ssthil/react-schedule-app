import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RulesInfo from './rulesInfo';

const customWidth = {
    width:'90%',
    maxWidth:'none'
}

class RulesDialog extends Component{

    state = {
        open: false
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
                    contentStyle={customWidth}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}>
                    <RulesInfo />
                </Dialog>
            </div>
        )
    }
}

export default RulesDialog;