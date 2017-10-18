export default {

  /* Please take note on the comments
   * foo: client entry name, after built there is a bundled js file named "foo.xxxxxxxx.js"
      - src: the entry file location
      - include: for improve build performance in development, we can ignore this built by set to false
  */
  // foo: {
  //   src: './src/routes/home/client.js',
  //   include: true
  // },

  // Home page
  home: {
    src: './src/routes/home/client.js',
    include: true
  },

  // Test page
  test: {
    src: './src/routes/test/client.js',
    include: true
  },

  // issue-getEl
  issueGetEl: {
    src: './src/routes/issue-getEl/client.js',
    include: true
  }
}
