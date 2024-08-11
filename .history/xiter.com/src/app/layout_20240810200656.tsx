// app/layout.tsx
import { fonts } from "@/app/"
import { Providers } from "@/app/CharaUiConfig/providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}