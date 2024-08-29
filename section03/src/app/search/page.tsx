export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string
  }
}) {
  return <>서치 페이지 {searchParams.q}</>
}
