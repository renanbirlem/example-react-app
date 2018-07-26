export const DEFAULT_LOCALE = 'pt';

const notifyTypeStyleForColor = color => ({
    borderLeft: `6px solid ${color}`,
    boxShadow: `
      0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12)
    `
});

export const NOTIFICATION_STYLE = {
    NotificationItem: {
        DefaultStyle: {
            backgroundColor: 'white',
            borderRadius: 0,
            borderTop: 'none',
            top: '50px',
        },
        success: notifyTypeStyleForColor('#28a745'),
        info: notifyTypeStyleForColor('#41ffe5'),
        warning: notifyTypeStyleForColor('#f96332'),
        error: notifyTypeStyleForColor('#dc3545')
    },
    Title: {
        success: {color: '#555'},
        error: {color: '#555'},
        warning: {color: '#555'},
        info: {color: '#555'}
    },
    MessageWrapper: {
        success: {color: '#555'},
        error: {color: '#555'},
        warning: {color: '#555'},
        info: {color: '#555'}
    },
    Dismiss: {
        DefaultStyle: {
        display: 'none'
        }
    }
};
  
