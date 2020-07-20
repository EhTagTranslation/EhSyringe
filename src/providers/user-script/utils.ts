export function openInTab(url: string): void {
    GM_openInTab(url, { active: true, insert: true, setParent: true });
}
