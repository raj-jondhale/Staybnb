// Define keywords associated with each category
const categoryKeywords = {
    trending: ['luxury', 'exclusive', 'premium', 'popular', 'modern', 'spectacular'],
    rooms: ['bedroom', 'suite', 'cozy', 'apartment', 'loft', 'studio', 'bed'],
    iconic_cities: ['downtown', 'city', 'urban', 'metropolis', 'skyline', 'central'],
    mountains: ['mountain', 'hill', 'peak', 'alpine', 'hiking', 'valley', 'trek'],
    castles: ['castle', 'historic', 'medieval', 'palace', 'fortress', 'heritage'],
    pools: ['pool', 'swim', 'beach', 'ocean', 'water', 'sea', 'private pool'],
    camping: ['camp', 'outdoor', 'nature', 'wilderness', 'tent', 'forest'],
    farms: ['farm', 'ranch', 'countryside', 'rural', 'barn', 'agricultural'],
    arctic: ['snow', 'ice', 'winter', 'arctic', 'cold', 'glacier'],
    domes: ['dome', 'geodesic', 'unique', 'spherical', 'round', 'circular'],
    boats: ['boat', 'yacht', 'marine', 'sea', 'sailing', 'waterfront', 'harbor']
};

function identifyCategory(description) {
    // Convert description to lowercase for case-insensitive matching
    const lowerDesc = description.toLowerCase();

    // Store category matches and their counts
    const matches = {};

    // Check for keywords in each category
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
        // Count how many keywords match for this category
        const matchCount = keywords.reduce((count, keyword) => {
            return count + (lowerDesc.includes(keyword) ? 1 : 0);
        }, 0);

        if (matchCount > 0) {
            matches[category] = matchCount;
        }
    }

    // If no matches found, return 'trending' as default
    if (Object.keys(matches).length === 0) {
        return 'trending';
    }

    // Return the category with the most keyword matches
    return Object.entries(matches)
        .sort((a, b) => b[1] - a[1])[0][0];
}

module.exports = { identifyCategory };