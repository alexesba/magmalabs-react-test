const fakeAuthProvider = {
  signin(callback) {
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    setTimeout(callback, 100);
  }
};

export default fakeAuthProvider;
