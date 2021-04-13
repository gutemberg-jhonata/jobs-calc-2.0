import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="theme-color" content="#41414C" />
                    <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
                    <title>JobsCalc</title>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />

                    <script src="scripts/index.js" defer type="module" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>    
        )
    }
}