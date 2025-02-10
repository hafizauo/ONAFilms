function formatReleaseDate(date) {
    const dateObj = new Date(date);
    return (
        dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    )
}

function formatRating(rating) {
    return rating.toFixed(1);
}

export { formatReleaseDate, formatRating };