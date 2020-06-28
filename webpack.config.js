import GoogleFontsPlugin from "./node_modules/google-fonts-webpack-plugin";

 export function chainWebpack(config) {
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Source Sans Pro" }
            ]
        })
    ];
}