import React from "react";

class SearchBar extends React.Component {
  onFormSubmit=(event)=>{
   event.preventDefault();
    console.log(this.state.term)
    this.props.onSubmit(this.state.term)
  }
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="image">Image Search</label>
            <input
              type="text"
              name="image"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
