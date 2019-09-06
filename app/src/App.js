import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, Card, CardContent, CardActions} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header'
import BloggingPic from './Blogging.png';



const styles = {
    img: {
        width: '100%',
        height: "auto",
    },
    card: {
        minWidth: '275',
    }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    }
  }

  async componentDidMount() {
    console.log("This function is firing");
    const response = await fetch('/api/blogs');
    const blogs = await response.json();
    this.setState({blogs});

  }

  handleDeleteClick = (id) => {

      // Remove the selected blog from the component's state
      this.setState(prevState => ({
          blogs: prevState.blogs.filter(blog => blog.id !== id)
      }))

      // Make a DELETE request to the microservice to delete the blog from the data store
      fetch(`/api/blog/${id}`, {
          method: 'DELETE'
      }).then(response => {
          console.log(response);


      })
  }

  getSingleBlog = (id) => {
      fetch(`/api/blog/${id}`, {
          method: 'GET'
      }).then(response =>
          response.json()
      ).then(data => {
          console.log(data)
          this.props.history.push(`/singleBlog/${id}`, {blogInfo: data});
      })
  }



  render() {
      const { classes } = this.props;
    return (
        <div className="App">
          <Header />
          <Grid
              container
              justify={"center"}>
              <Grid
                  item xs={8}
                  alignItems={"center"}
              >
                  <img
                      src={BloggingPic}
                      className={classes.img}
                  />
              </Grid>
              <Grid item xs={10}>
                  <Grid container
                        justify={"space-between"}
                        >
                      {this.state.blogs.map(blog => (
                          <Grid item xs={3} key={blog.id}>
                              <Card key={blog.id}>
                                  <CardContent>
                                      <Typography variant={"h5"} gutterBottom>
                                          {blog.title}
                                      </Typography>
                                      <Typography>
                                          {blog.post}
                                      </Typography>
                                  </CardContent>
                                  <CardActions>
                                      <Button onClick={() => this.getSingleBlog(blog.id)}>ReadMore</Button>
                                      <Button onClick={() => this.handleDeleteClick(blog.id)}>Delete</Button>
                                  </CardActions>
                              </Card>
                          </Grid>
                      ))}
                  </Grid>

              </Grid>
          </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(App);
