module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        // 指定样式路径,主要是为了自定义主题才这样做，如果没有自定义主题的需要，就可以直接使用style: true
        style: (name) => `${name}/style/less`
      },
      "vant"
    ]
  ]
};
