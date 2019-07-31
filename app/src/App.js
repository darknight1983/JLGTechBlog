import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, Card, CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Header from './components/Header'
import BlogPic2 from './BlogPic2.jpg';



const styles = {
    img: {
        width: '100%',
        height: "1000px",
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



  render() {
      const { classes } = this.props;
    return (
        <div className="App">
          <Header />
          <Grid
              container
              justify={"center"}>
              <Grid
                  item xs={12}
                  alignItems={"center"}
              >
                  <img
                      src={BlogPic2}
                      className={classes.img}
                  />
              </Grid>
              <Grid item>
                  <Grid container alignItems={'stretch'}>
                      {this.state.blogs.map(blog => (
                          <Grid item xs={4} key={blog.id}>
                              <Card key={blog.id}>
                                  <CardContent>
                                      <Typography variant={"h3"}>
                                          {blog.title}
                                      </Typography>
                                  </CardContent>
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
