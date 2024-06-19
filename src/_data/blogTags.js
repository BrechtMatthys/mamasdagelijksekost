module.exports = function() {
    return function(tags) {
        if (!tags.includes('post')) {
            tags.push('post');
        }
        return tags;
    };
};
