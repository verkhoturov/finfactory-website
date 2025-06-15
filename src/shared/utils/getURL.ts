import canUseDOM from './canUseDOM';

export const getServerSideURL = () => {
    let url = process.env.WEBSITE_URL ? `http://${process.env.WEBSITE_URL}` : null;

    if (!url) {
        url = 'http://localhost:3000';
    }

    return url;
};

export const getClientSideURL = () => {
    if (canUseDOM) {
        const protocol = window.location.protocol;
        const domain = window.location.hostname;
        const port = window.location.port;

        return `${protocol}//${domain}${port ? `:${port}` : ''}`;
    }

    return process.env.WEBSITE_URL ? `https://${process.env.WEBSITE_URL}` : '';
};
