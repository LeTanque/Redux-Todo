import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux'; // Redux connect. Used to connect state store to component
import {updateTitle} from './actions'

import {FaEdit} from 'react-icons/fa';



class Title extends Component {
    state = {
        newTitleText: this.props.title,
        editing: false
    }


    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }


    updateTitle = event => {
        event.preventDefault();
        this.props.updateTitle(this.state.newTitleText);
        this.setState({ editing:false });
    }
    
    render() {
        // console.log(this.state)
        // console.log(this.props.updateTitle)
        return (
            <Fragment>
                
                {!this.state.editing ? (
                    <h1 className="heading-title">
                        {this.props.title}{" "}
                        <FaEdit onClick={() => this.setState({editing:true})} className='' />
                    </h1>
                ) : (
                    <section className='update-form'>
                        <input
                            className="title-input"
                            type="text"
                            name="newTitleText"
                            value={this.state.newTitleText}
                            onChange={this.handleChanges}
                        />
                        <button onClick={this.updateTitle} className='btn-primary'>Update title</button>
                    </section>
                )}
                <div className='brand-title'></div>
    
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        title: state.title
    }
}


// a HOC that first executes our mapStateToProps function, which brings our state for this component into context
// then exports the component. 
export default connect( 
    mapStateToProps,
    {updateTitle}
)(Title);