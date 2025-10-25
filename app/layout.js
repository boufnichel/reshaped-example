import App from '../components/App';

export const metadata = {
  title: 'Reshaped Example',
  description: 'Example of Reshaped UI with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-rs-theme="slate" data-rs-color-mode="dark">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
