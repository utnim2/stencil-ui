// styleguide.config.js
const path = require('path');
const propsParser = require("react-docgen-typescript");
module.exports = {
  //components: 'src/components/**/*.jsx',
  propsParser: propsParser.withCustomConfig("./tsconfig.json", {
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    propFilter: (prop, component) => {
      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        return prop.declarations.find(
          (declaration) => !declaration.fileName.includes("node_modules")
        );
      }

      return true;
    },
  }).parse,
  webpackConfig: require("./webpack.config.js"),
  components: "src/components/**/[A-Z]*.js",
  assetsDir: ['docs/asset'],
  styleguideComponents: {
    Wrapper: path.resolve("src/lib/styleguide/Wrapper.tsx"),
    //Logo: path.resolve("src/lib/styleguide/Logo"),
  },
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md",
    },
    {
      name: "Components",
      sections: [
        {
          name: "Basic",
          components: "src/components/basic/**/*.[j|t]sx",
          exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
          usageMode: "expand", // 'hide' | 'collapse' | 'expand'
        },
        {
          name: "Layout",
          components: "src/components/layout/**/*.[j|t]sx",
          exampleMode: "collapse",
          usageMode: "expand",
        },
        {
            name: 'Inputs',
            components: 'src/components/inputs/*.[j|t]sx',
            exampleMode: 'collapse',
            usageMode: 'expand'
        },
        {
            name: 'Feedback',
            components: 'src/components/feedback/*.[j|t]sx',
            exampleMode: 'collapse',
            usageMode: 'expand',
            
        },
      
      ],
      sectionDepth: 2,
    },
  ],
  pagePerSection: true,
	theme: './styleguide.theme.js'
};
