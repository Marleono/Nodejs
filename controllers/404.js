exports.getError = (req, res, next) => {
    res.status(404).render('error', {docTitle: 'Page not found', path: '/404'})
    // res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
};