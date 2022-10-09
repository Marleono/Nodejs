exports.getError = (req, res, next) => {
    res.status(404).render('error', {docTitle: 'Page not found', path: '/404'})
    // res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
};

exports.get500 = (req, res, next) => {
    res.status(500).render('500', {
      docTitle: 'Error!',
      path: '/500',
      isAuthenticated: req.session.isLoggedIn
    });
  };
  