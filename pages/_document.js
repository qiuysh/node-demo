import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
          <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <style jsx global>{`
              #__next {
                width: 100vw;
                height: 100vh;
              }
              .trigger {
                font-size: 18px;
                line-height: 64px;
                cursor: pointer;
                transition: color 0.3s;
              }
              .trigger:hover {
                color: #1890ff;
              }
              .ant-page-header-ghost {
                background: #fff;
              }
            `}</style>
          </Head>
          <body className="next-ssr">
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}
export default MyDocument