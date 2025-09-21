
const cacheKey = "cachedSeraches";

export function fetchRecentSearches(): Record<string, any>[] {
    const cache = sessionStorage.getItem(cacheKey);
    return cache ? JSON.parse(cache) : [];
}

export function addSearch(search: Record<string, any>, isLatin: boolean) {
    let currentSearches = fetchRecentSearches();

    currentSearches.push({...search, isLatin: isLatin});

    sessionStorage.setItem(cacheKey, JSON.stringify(currentSearches));
}