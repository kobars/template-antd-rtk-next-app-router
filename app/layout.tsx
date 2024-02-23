/* Components */
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Providers } from "@/lib/providers";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AntdRegistry>{props.children}</AntdRegistry>
        </body>
      </html>
    </Providers>
  );
}
