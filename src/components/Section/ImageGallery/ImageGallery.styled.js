import { styled } from 'styled-components';

export const NotificationText = styled('h4')(() => ({
    color: '#424D55',
    textAlign: 'center',
    opacity: '0.6',
}));

export const ErorrNotificationText = styled('h4')(() => ({
    color: '#D61717',
    textAlign: 'center',
    opacity: '0.6',
}));

export const Gallery = styled('ul')`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;
