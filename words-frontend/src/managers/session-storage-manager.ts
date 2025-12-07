
const cacheKey = "cachedSeraches";

export function fetchRecentSearches(): Record<string, any>[] {
    const cache = sessionStorage.getItem(cacheKey);
    return cache ? JSON.parse(cache) : [];
}

export function addSearch(search: Record<string, any>, isLatin: boolean, uniqueId: string) {
    let currentSearches = fetchRecentSearches();

    currentSearches.push({...search, isLatin: isLatin, uniqueId: uniqueId});

    sessionStorage.setItem(cacheKey, JSON.stringify(currentSearches));
}

export function removeSearch(uniqueId: string) {
    let currentSearches = fetchRecentSearches();
    currentSearches = currentSearches.filter(search => search.uniqueId !== uniqueId);

    sessionStorage.setItem(cacheKey, JSON.stringify(currentSearches));
}