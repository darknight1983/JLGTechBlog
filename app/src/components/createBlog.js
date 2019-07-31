import React, { Component } from 'react';
import  Grid from '@material-ui/core/Grid';
import Header from './Header';
import { withStyles} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import { Button} from "@material-ui/core";

const styles = {
    form: {

        marginTop: 10,
    },
    titleInput: {
        display: 'block'
    },
    postInput: {
        display: 'block'
    }
}

class createBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            post: ""
        }
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        const { title, post } = this.state;
        let newPost = {
            title,
            post
        }
        // Send a POST request to the microservice in order to create a new post entity
        fetch("/api/blog", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost),
        }).then(response => {
            console.log(response);
            this.props.history.push("/")
        });

        /* Dont forget to redirect the user after the transaction is complete*/
    }

    onHandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header/>
                <Grid
                    container
                    justify={"center"}
                >
                    <Grid item xs={5}>
                        <form
                            onSubmit={this.onHandleSubmit}
                            className={classes.form}
                        >
                            <TextField
                                placeholder={"Enter Title"}
                                fullWidth={true}
                                name={"title"}
                                value={this.state.title}
                                onChange={this.onHandleChange}
                                className={classes.titleInput}
                            />
                            <TextField
                                placeholder={"Enter Blog Post"}
                                multiline={true}
                                name={"post"}
                                fullWidth={true}
                                rows={8}
                                value={this.state.post}
                                onChange={this.onHandleChange}
                                className={classes.postInput}
                            />
                            <Button type={'submit'}>Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(createBlog);