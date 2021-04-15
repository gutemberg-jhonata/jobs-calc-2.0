import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="theme-color" content="#41414C" />
                    
                    <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
                    
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