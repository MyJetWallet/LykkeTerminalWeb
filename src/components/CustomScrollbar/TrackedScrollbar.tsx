import {rem} from 'polished';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import {dims} from '../styled';

const defaultHeight = `calc(100% - ${rem(dims.tileHeaderHeight)}`;

export interface TrackedScrollbarProps {
  styles?: any;
}

let currentScrollPosition = 0;

class TrackedScrollbar extends React.Component<TrackedScrollbarProps> {
  scrollbar: any;

  constructor(props: TrackedScrollbarProps) {
    super(props);
  }

  onScrollStop = () => {
    currentScrollPosition = this.scrollbar.getScrollTop();
  };

  componentDidMount() {
    this.scrollbar.scrollTop(currentScrollPosition);
  }

  render() {
    return (
      <Scrollbars
        ref={callback => {
          this.scrollbar = callback;
        }}
        autoHide={true}
        style={{height: defaultHeight, ...this.props.styles}}
        onScrollStop={this.onScrollStop}
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default TrackedScrollbar;
