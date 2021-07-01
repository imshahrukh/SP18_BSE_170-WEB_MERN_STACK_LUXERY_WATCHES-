var Button = React.createClass({
  initState: function () {
    return {
      bgColor: "blue",
    };
  },

  handleClick: function () {
    this.setState({
      bgColor: "red",
    });
  },

  render: function () {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.bgColor }}
        >
          Button
        </button>
      </div>
    );
  },
});

ReactDOM.render(<Button />, document.getElementById("button"));
