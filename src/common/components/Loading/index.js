import React from 'react';

import ReactLoading from 'react-loading';

const style = {
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1055,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51, 122, 183, 0.8)'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1056
  },
  loading: {
    height: '30px',
    width: '60px',
    zIndex: 1054,
    color: '#FFFFFF',
    fill: "currentColor",
  }
}

function Loading() {
  const type = 'balls';
  const color = '#FFFFFF';

  return (
    <div style={style.container}>
      <div style={style.overlay}></div>
      <div style={style.content}>
        <ReactLoading type={type} color={color} height='30' width='60' style={style.loading}/>
      </div>
    </div>
  )
}

export default Loading;
