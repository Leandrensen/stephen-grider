import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  // We use this to add mocked comments to the initialState of the app
  // This is necesary to search for those comments, because we can't
  // insert them as if the app was running, because the CommentList
  // component is isolated from the rest of the app
  const initialState = {
    comments: ['comment 1', 'comment 2'],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

// How to find components inside a component
it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

// How to find text inside a component
it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment 1');
  expect(wrapped.render().text()).toContain('comment 2');
});
