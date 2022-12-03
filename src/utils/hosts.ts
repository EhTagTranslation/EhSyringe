export function isEh(hostname: string): boolean {
    if (hostname === 'forums.e-hentai.org') return false;
    return hostname === 'e-hentai.org' || hostname.endsWith('.e-hentai.org');
}

export function isEx(hostname: string): boolean {
    return (
        hostname === 'exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion' ||
        hostname.endsWith('.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion') ||
        hostname === 'exhentai.org' ||
        hostname.endsWith('.exhentai.org')
    );
}

export function isHathNetwork(hostname: string): boolean {
    return hostname === 'hath.network' || hostname.endsWith('.hath.network');
}

export function isValidHost(hostname: string): boolean {
    if (!hostname) return false;
    return isEh(hostname) || isEx(hostname) || isHathNetwork(hostname);
}
