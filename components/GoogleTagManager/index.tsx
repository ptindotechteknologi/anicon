/* eslint-disable @next/next/next-script-for-ga */
// components/GoogleTagManager.js

const GoogleTagManager = () => (
  <>
    {/* Google Tag Manager */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-16479299398"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16479299398');
          `,
      }}
    />
    {/* End Google Tag Manager */}
  </>
);

export default GoogleTagManager;
