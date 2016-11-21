import React from 'react';

export class HomeView extends React.Component {
  render() {
    return (
        <div>
            <h1>One</h1>
            <a href="#/two">Two</a>
        </div>
    );
  }
}

export class FormCreate extends React.Component {
  render() {
    return (
        <div>
            <h1>Form</h1>
            <form>
                <input type="text" name="search"/>
            </form>
            <a href="#/one">One</a>
        </div>
    );
  }
}
