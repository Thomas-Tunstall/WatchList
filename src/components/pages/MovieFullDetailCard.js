import React, { Component } from "react";
import PropTypes from "prop-types";

// MUI STUFF
// import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import { getSingleMovie } from "../redux/actions/movieCalls";

// REDUX STUFF
import { connect } from "react-redux";

class MovieFullDetail extends Component {
  render() {
    console.log("==========SINGLE MOVIE STUFF===========");
    console.log(this.props.data);
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="{this.props.data.specificMovie.details.title}"
            height="500"
            src={`https://image.tmdb.org/t/p/original/${this.props.data.specificMovie.details.backdrop_path}`}
            title="{this.props.data.specificMovie.details.title}"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.data.specificMovie.details.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br />
              Release Date: {this.props.data.specificMovie.details.release_date}
              <br />
              <br />
              Cast: {this.props.data.specificMovie.credits.id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    );
  }
}

// REDUX JUNK BELOW

MovieFullDetail.propTypes = {
  data: PropTypes.object.isRequired,
  getSingleMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(MovieFullDetail);
