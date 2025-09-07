function isDomain(hostname: string, domain: string): boolean {
    return hostname === domain || hostname.endsWith(`.${domain}`);
}

export function isEh(hostname: string): boolean {
    if (hostname === FORUM) return false;
    if (hostname === REPO) return false;
    return isDomain(hostname, EH);
}

export function isUnion(hostname: string): boolean {
    return isDomain(hostname, EXU);
}

export function isEhGt(hostname: string): boolean {
    return isDomain(hostname, EHGT);
}

export function isEx(hostname: string): boolean {
    return isDomain(hostname, EX) || isUnion(hostname);
}

export function isRepo(hostname: string): boolean {
    return isDomain(hostname, REPO);
}

export function isHathNetwork(hostname: string): boolean {
    return isDomain(hostname, HATH);
}

export function isWiki(hostname: string): boolean {
    return hostname === 'ehwiki.org';
}

export function isValidHost(hostname: string): boolean {
    if (!hostname) return false;
    return isEh(hostname) || isEx(hostname) || isHathNetwork(hostname) || isRepo(hostname) || isWiki(hostname);
}

export const EX = 'exhentai.org';
export const EH = 'e-hentai.org';
export const EXU = 'exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion';
export const EHGT = 'ehgt.org';
export const REPO = 'repo.e-hentai.org';
export const HATH = 'hath.network';
export const FORUM = 'forums.e-hentai.org';
