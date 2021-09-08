import 'dotenv/config';

export function node_url(networkName: string): string {
    if (networkName) {
        const uri = process.env['ETH_NODE_URI_' + networkName.toUpperCase()];
        if (uri && uri !== '') {
            return uri;
        }
    }

    let uri = process.env.ETH_NODE_URI;
    if (uri) {
        uri = uri.replace('{{networkName}}', networkName);
    }
    if (!uri || uri === '') {
        if (networkName === 'localhost') {
            return 'http://localhost:8545';
        }
        return '';
    }
    if (uri.indexOf('{{') >= 0) {
        throw new Error(
            `invalid uri or network not supported by node provider : ${uri}`
        );
    }
    return uri;
}

export function get_private_key(networkName?: string): string {
    if (networkName) {
        const pkey = process.env['PRIVATE_KEY_' + networkName.toUpperCase()];
        if (pkey && pkey !== '') {
            return pkey;
        }
    }
    return "0x0000000000000000000000000000000000000000";
}

export function accounts(networkName?: string): {privateKey: string} {
    return {privateKey: get_private_key(networkName)};
}

export function get_api_key(networkName: string): string {
    const api_key = process.env['API_KEY_' + networkName.toUpperCase()];
    if (api_key && api_key !== '') {
        return api_key;
    }
    return "0x0000000000000000000000000000000000000000";
}
