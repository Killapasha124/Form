const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
<<<<<<< HEAD

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Form/' 
    : '/'
}
=======
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/form/'
    : '/'
}
>>>>>>> 4554f8ddab70aa488ebc19f960444e3f78adb1ff
