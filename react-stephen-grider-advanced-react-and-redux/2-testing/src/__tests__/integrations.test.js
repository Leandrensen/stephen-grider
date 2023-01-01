import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

// This is an integration test: Because it touches a lot of stuff inside the app
// We are checking that there is a CommentBox
// It has a fetch coments button
// You can click on it and make it call the fetchComments action
// which in turns returns results to the comments reducer
// and we are checking that the actual values are there.

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'fetched #1' }, { name: 'fetched #2' }],
  });

  // Attempt to render the *entire* app
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('can fetch a list of comments and display them', (done) => {
  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments-button').simulate('click');

  // introduce a TINY little pause for the moxios to return the mocked
  // request before trying to find the li's
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of coments!
    expect(wrapped.find('li').length).toEqual(2);

    // Jest waits until the done() function runs, and then calls it quits.
    // If not it will run without waiting for the setTime out and always return succes.
    // Because it doesnt wait for the code inside the setTimeout to finish before
    // checking for errors or failed expectations
    done();
  });
});
